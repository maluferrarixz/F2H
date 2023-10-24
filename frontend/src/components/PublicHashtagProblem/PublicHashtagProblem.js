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

  function PublicHashtagProblem() {
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
              defaultValue='Problema que abordou na postagem'
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
            Selecione o problema que abordou na postagem:
            <RadioGroup value={color} onChange={(newColor) => setColor(newColor)}>
              <Radio value='HipHop'>Depressão</Radio>
              <Radio value='Jazz'>Ansiedade</Radio>
              <Radio value='ballet'>baixa autoestima</Radio>
              <Radio value='Contemporaneo'>perfeccionismo</Radio>
              <Radio value='dança do ventre'>Problemas com corpo</Radio>
            </RadioGroup>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }

export default PublicHashtagProblem
