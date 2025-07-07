import { useState, useRef } from "react";
import { Person } from '@/components/Person'
import { IMember } from '@/types/IMember'
import { useFamilyTree } from './FamilyTreeProvider'

interface SubFamilyTreeProps {
  rootMember: IMember
  level?: number
}

const SubFamilyTree = ({ rootMember, level = 0 }: SubFamilyTreeProps) => {
  const renderCouple = () => (
    <div className="border-solid border-gray-300 border p-2 rounded-md inline-block">
      <Person member={rootMember} />
      <Person member={rootMember?.spouse} isDescendant={level === 0 && true} />
    </div>
  )

  const renderChildren = () => (
    <ul
      key={rootMember.name}
      className="pt-14 relative flex flex-row items-baseline justify-center"
    >
      {rootMember.children.map((member) => (
        <SubFamilyTree
          rootMember={member}
          level={level + 1}
          key={member.name}
        />
      ))}
    </ul>
  )

  return (
    <li className="float-left list-none relative pt-14 px-2">
      {renderCouple()}
      {rootMember.children.length > 0 && renderChildren()}
    </li>
  )
}

const FamilyTree = () => {
  const { root } = useFamilyTree();
  const [zoomLevel, setZoomLevel] = useState(1);

  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const treeRef = useRef<HTMLDivElement>(null)
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 2)) // Max zoom: 2x
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.5)) // Min zoom: 0.5x
  }
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y })
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && treeRef.current) {
      const deltaX = (e.clientX - startPos.x) / zoomLevel
      const deltaY = (e.clientY - startPos.y) / zoomLevel
      treeRef.current.scrollLeft = -deltaX
      treeRef.current.scrollTop = -deltaY
      setStartPos({ x: e.clientX, y: e.clientY })
    }
  }
  const handleMouseUp = () => {
    setIsDragging(false)
  }


  return (
    <div className="relative w-full ">
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={handleZoomIn}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          aria-label="Zoom out"
        >
          -
        </button>
      </div>

      <div ref={treeRef} className="tree whitespace-nowrap w-full overflow-x-auto scroll-smooth cursor-move" data-testid="family-tree-root"
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <ul className="relative flex flex-row items-baseline justify-center inline-flex flex-nowrap min-w-max gap-4 p-4">
          <SubFamilyTree rootMember={root} />
        </ul>
      </div>
    </div>

  )
}

export default FamilyTree
