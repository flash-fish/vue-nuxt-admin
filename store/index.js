import { CHANGE_MENU_COLLAPSED } from '../utils/types/mutation-types'
import { initMenu } from '../utils/constant'

export const state = () => ({
  menuCollapsed: false,
  siderMenuList: initMenu
})

export const mutations = {
  // sider state
  [CHANGE_MENU_COLLAPSED](state, collapse) {
    state.menuCollapsed = collapse
  }
}
