import serviceStartup from 'service-startup'
import api from './api/api'

/**
 * Just import this file in place where you use admin-api.
 * service-startup will automatically check if your connection is good
 */

serviceStartup.addStep({
  name: 'Crypto Keeper',
  envBlackList: ['test'],
  onRun: async () => {
    // ping requires authorization, so it will crash when auth is not ok
    await api.verify()
  },
})
