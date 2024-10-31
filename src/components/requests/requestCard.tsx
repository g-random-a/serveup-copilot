import { Badge, Code, DataList } from '@radix-ui/themes'
import clsx from 'clsx'

import { Card, CardContent } from '@/components/ui/card'

interface RequestCardProps {
  name: string
  location: string
  payment: string
  supplier: string
  isActive: boolean
  changeIndex: () => void
}

const RequestCard: React.FC<RequestCardProps> = ({
  name,
  location,
  payment,
  supplier,
  isActive,
  changeIndex,
}) => (
  <Card
    className={clsx(
      'py-3 shadow-sm mb-4 bg-white rounded-lg transition-all',
      isActive && 'ring-2 ring-offset-2 ring-blue-500',
    )}
    tabIndex={0}
    onClick={changeIndex}
  >
    <CardContent className="pb-0">
      <DataList.Root className="gap-3">
        <DataList.Item>
          <DataList.Label minWidth="88px">{name}</DataList.Label>
          <DataList.Value>{location}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Payment</DataList.Label>
          <DataList.Value>
            <Badge color="jade" variant="soft" className="p-[0.3rem] rounded-sm">
              <Code variant="ghost">{payment}</Code>
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Supplier</DataList.Label>
          <DataList.Value>{supplier}</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </CardContent>
  </Card>
)

export default RequestCard
