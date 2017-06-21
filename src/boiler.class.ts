export class BoilerSingleton {
  private static Boiler

  static getInstance() {
    if (!this.Boiler) this.Boiler = new this.BoilerClass()
    else console.log('Reusing existing Boiler')
    return this.Boiler
  }

  private static BoilerClass = class Boiler {
    private empty: boolean = true
    private boiled: boolean = false
    
    constructor() {
      console.log('Instantiated actual boiler')
    }

    fill() {
      if (!this.empty) return console.log('🔴  Boiler already filled')
      else {
        this.empty = false
        this.boiled = false
        console.log('✅  Filled Boiler!')
      }
    }

  }
}
