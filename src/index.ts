import { BoilerSingleton } from './boiler.class'

const BoilerAccess1 = BoilerSingleton.getInstance()
const BoilerAccess2 = BoilerSingleton.getInstance()

BoilerAccess1.fill()
BoilerAccess2.fill()
