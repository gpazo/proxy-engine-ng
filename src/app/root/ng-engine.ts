export class NgEngine {
  public packs: {}
  public routes: {}
  public models: {}
  public effects: {}
  public reducers: {}
  public actions: {}

  constructor() {
    Object.defineProperties(this, {
      packs: {
        value: { }
      },
      routes: {
        value: { }
      },
      models: {
        value: { }
      },
      effects: {
        value: { }
      },
      reducers: {
        value: { }
      },
      actions: {
        value: { }
      }
    })

    const packs = []

    packs.forEach(Pack => {
      try {
        const pack = new Pack(this)
        this.packs[pack.name] = pack
        // this.config.merge(pack.config)
        this.mergePack(pack)
        // lib.Core.bindTrailpackMethodListeners(this, pack)
      }
      catch (e) {
        console.log(e.stack)
        throw new Error('ng constructor')
        // throw new NgPackError(Pack, e, 'constructor')
      }
    })
  }

  private mergePack (pack = {routes: {}, models: {}, effects: {}, reducers: {}, actions: {}}) {
    Object.assign(this.routes, pack.routes)
    Object.assign(this.models, pack.models)
    Object.assign(this.effects, pack.effects)
    Object.assign(this.reducers, pack.reducers)
    Object.assign(this.actions, pack.actions)
  }
}