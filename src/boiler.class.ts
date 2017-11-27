export class BoilerSingleton {
	private static _instance: BoilerSingleton
	private empty: boolean = true
	private boiled: boolean = false

	static get instance(): BoilerSingleton {
		if (!this._instance) this._instance = new BoilerSingleton()
		return this._instance
	}

	constructor() {
		console.log('Instantiated actual boiler')
	}

	fill() {
		if (!this.empty) return console.log('🔴	Boiler already filled')
		else {
			this.empty = false
			this.boiled = false
			console.log('✅	Filled Boiler!')
		}
	}
}
