import { BoilerSingleton } from './boiler.class'
import { BoilerAccess3 } from './access'

const BoilerAccess1 = BoilerSingleton.instance
const BoilerAccess2 = BoilerSingleton.instance

BoilerAccess1.fill()
BoilerAccess2.fill()
BoilerAccess3.fill()
