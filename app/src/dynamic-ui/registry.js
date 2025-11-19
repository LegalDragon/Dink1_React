
import NumericInput from './components/NumericInput'
import DateTimeInput from './components/DateTimeInput'
import HiddenField from './components/HiddenField'
import PasswordInput from './components/PasswordInput'

export const registry = {
  numeric: NumericInput,
  datetime: DateTimeInput,
  hidden: HiddenField,
  password: PasswordInput
}
