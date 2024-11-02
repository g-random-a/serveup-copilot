import { Badge, DataList, Flex, Heading } from '@radix-ui/themes'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import * as React from 'react'

interface DataListProps {
  title: string
  value: string
  onclick?: () => void
  active: boolean
  setActive: (active: boolean) => void
}

const SelectRestaurantComponent: React.FC<DataListProps> = ({
  title,
  value,
  onclick,
  active,
  setActive,
}) => {
  return (
    <div
      onClick={() => {
        setActive(!active)
        if (onclick) onclick()
      }}
      tabIndex={0}
      style={{
        cursor: 'pointer',
        border: active ? '1px solid #00A6C6' : '1px solid #E8E8E8',
        borderRadius: '8px',
        padding: '10px',
      }}
      className="w-full"
    >
      <Flex direction="row" align="center" justify="between" width="100%">
        <Flex direction="column" style={{ marginBottom: '10px' }} gap="1">
          <Heading className="text-[#0007149F] font-sans" size="4">
            {title}
          </Heading>
          <DataList.Root style={{ gap: '10px' }}>
            <Badge color="jade" variant="soft">
              {value}
            </Badge>
          </DataList.Root>
        </Flex>
        {active ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Flex>
    </div>
  )
}

export default SelectRestaurantComponent
