import { Table } from '@radix-ui/themes'

const netSales = [
  { sales: 'R16,9434,00', date: '12/12/2024' },
  { sales: 'R16,9434,00', date: '12/12/2024' },
  { sales: 'R16,9434,00', date: '12/12/2024' },
  { sales: 'R16,9434,00', date: '12/12/2024' },
  { sales: 'R16,9434,00', date: '12/12/2024' },
  { sales: 'R16,9434,00', date: '12/12/2024' },
  { sales: 'R16,9434,00', date: '12/12/2024' },
  { sales: 'R16,9434,00', date: '12/12/2024' },
  { sales: 'R16,9434,00', date: '12/12/2024' },
  { sales: 'R16,9434,00', date: '12/12/2024' },
]

function HomepageTable() {
  return (
    <div
      className="overflow-y-scroll h-[50vh] "
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
      }}
    >
      <Table.Root variant="surface" className="w-full max-w-sm">
        <Table.Header>
          <Table.Row align="end">
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="end">Sales</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {netSales.map((item, index) => (
            <Table.Row key={index} align="end">
              <Table.Cell justify="start">{item.date}</Table.Cell>
              <Table.Cell justify="end">{item.sales}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default HomepageTable
