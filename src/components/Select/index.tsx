import { SelectContainer, Option } from './styles'

interface SelectProps {
  options: {
    label: string
    value: string
  }[]
  isOutlined?: boolean
  onSelect: (value: any) => void
}

export function Select({ options, isOutlined, onSelect }: SelectProps) {
  return (
    <SelectContainer
      isOutlined={isOutlined}
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map(({ label, value }) => (
        <Option key={label} value={value}>
          {label}
        </Option>
      ))}
    </SelectContainer>
  )
}
