import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverAnchor,
    Radio,
    HStack,
    Button,
    Input,
    RadioGroup,
    useBoolean,
  } from '@chakra-ui/react'

import React from 'react';

  function PublicHashtagDance() {
    const [isEditing, setIsEditing] = useBoolean()
    const [color, setColor] = React.useState('purple')
  
    return (
      <Popover
        isOpen={isEditing}
        onOpen={setIsEditing.on}
        onClose={setIsEditing.off}
        closeOnBlur={false}
        isLazy
        lazyBehavior='keepMounted'
      >
        <HStack>
          <PopoverAnchor>
            <Input
              color={color}
              w='30vh'
              display='inline-flex'
              isDisabled={!isEditing}
              defaultValue='Dança que abordou na postagem:'
            />
          </PopoverAnchor>
  
          <PopoverTrigger>
            <Button h='40px' colorScheme='purple'>
              {isEditing ? 'Save' : 'Edit'}
            </Button>
          </PopoverTrigger>
        </HStack>
  
        <PopoverContent>
          <PopoverBody>
            Selecione a dança que abordou na postagem:
            <RadioGroup value={color} onChange={(newColor) => setColor(newColor)}>
              <Radio value='HipHop'>Hiphop</Radio>
              <Radio value='Jazz'>Jazz</Radio>
              <Radio value='ballet'>ballet</Radio>
              <Radio value='Contemporaneo'>Contemporaneo</Radio>
              <Radio value='dança do ventre'>Dança do ventre</Radio>
            </RadioGroup>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }

export default PublicHashtagDance