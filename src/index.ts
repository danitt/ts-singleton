import { BoilerSingleton } from './boiler.class'
import { BoilerAccess3 } from './access'

const BoilerAccess1 = BoilerSingleton.getInstance()
const BoilerAccess2 = BoilerSingleton.getInstance()

BoilerAccess1.fill()
BoilerAccess2.fill()
BoilerAccess3.fill()
