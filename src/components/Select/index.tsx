import { SelectContainer, Option } from './styles'

interface SelectProps {
  options: {
    label: string
    value: string
  }[]
  onSelect: (value: any) => void
}

export function Select({ options, onSelect }: SelectProps) {
  return (
    <SelectContainer onChange={(e) => onSelect(e.target.value)}>
      {options.map(({ label, value }) => (
        <Option key={label} value={value}>
          {label}
        </Option>
      ))}
    </SelectContainer>
  )
}
