import { Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from 'assets/icons'
import { useTypebotDnd } from 'contexts/TypebotDndContext'
import Link from 'next/link'
import React, { useMemo } from 'react'

export const BackButton = ({ id }: { id: string | null }) => {
  const { draggedTypebot, setMouseOverFolderId, mouseOverFolderId } =
    useTypebotDnd()

  const isTypebotOver = useMemo(
    () => draggedTypebot && mouseOverFolderId === id,
    [draggedTypebot, id, mouseOverFolderId]
  )

  const handleMouseEnter = () => setMouseOverFolderId(id)
  const handleMouseLeave = () => setMouseOverFolderId(undefined)
  return (
    <Button
      as={Link}
      href={id ? `/typebots/folders/${id}` : '/typebots'}
      leftIcon={<ChevronLeftIcon />}
      variant={'outline'}
      colorScheme={isTypebotOver ? 'blue' : 'gray'}
      borderWidth={isTypebotOver ? '3px' : '1px'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Back
    </Button>
  )
}
