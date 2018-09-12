import Vue from 'vue'
import Router from 'vue-router'
import PersonalCenter from '@/components/PersonalCenter'
import Login from '@/components/Login'
import Login1 from '@/components/Login1'
import Login2 from '@/components/Login2'
import Login3 from '@/components/Login3'
import Register from '@/components/Register'
import Register1 from '@/components/Register1'
import WithDraw from '@/components/WithDraw'
import WithDr from '@/components/WithDr'
import Forget from '@/components/Forget'
import Forget1 from '@/components/Forget1'
import SetCode from '@/components/SetCode'
import Code from '@/components/Code'
import ResetCode from '@/components/ResetCode'
import Order from '@/components/Order'
import List0 from '@/components/List0'
import List1 from '@/components/List1'
import List2 from '@/components/List2'
import List3 from '@/components/List3'
import List4 from '@/components/List4'
import List5 from '@/components/List5'
import OrderInfo from '@/components/OrderInfo'
import Logistics from '@/components/Logistics'
import PersonInfo from '@/components/PersonInfo'
import ChangeHead from '@/components/ChangeHead'
import ChangeHead1 from '@/components/ChangeHead1'
import PrCode from '@/components/PrCode'
import PrCode1 from '@/components/PrCode1'
import ChangeName from '@/components/ChangeName'
import BindPhone from '@/components/BindPhone'
import InviteCode from '@/components/InviteCode'
import Set from '@/components/Set'
import Account from '@/components/Account'
import Resetcode1 from '@/components/Resetcode1'
import Server0 from '@/components/Server0'
import Server1 from '@/components/Server1'
import Server2 from '@/components/Server2'
import Server3 from '@/components/Server3'
import Certification from '@/components/Certification'
import Site from '@/components/Site'
import Mine0 from '@/components/Mine0'
import Detail from '@/components/Detail'
import Convert from '@/components/Convert'
import Rank from '@/components/Rank'
import RankList from '@/components/RankList'
import FootPrint from '@/components/FootPrint'
import Mine1 from '@/components/Mine1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/footprint'
    },
    {
      path:'/footprint',
      name:'FootPrint',
      component:FootPrint
    },
    {
      path:'/rank',
      name:'Rank',
      component:Rank,
      children:[
        {
          path:'/ranklist/:num',
          name:'RankList',
          component:RankList,
        }
      ]
    },
    {
      path:'/convert',
      name:'Convert',
      component:Convert
    },
    {
      path:'/detail',
      name:'Detail',
      component:Detail
    },
    {
      path:'/mine0',
      name:'Mine0',
      component:Mine0
    },
    {
      path:'/mine1',
      name:'Mine1',
      component:Mine1
    },
    {
      path:'/site',
      name:'Site',
      component:Site
    },
    {
      path:'/certification',
      name:'Certification',
      component:Certification
    },
    {
      path:'/server0',
      name:'Server0',
      component:Server0
    },
    {
      path:'/server1',
      name:'Server1',
      component:Server1
    },
    {
      path:'/server2',
      name:'Server2',
      component:Server2
    },
    {
      path:'/server3',
      name:'Server3',
      component:Server3
    },
    {
      path:'/set',
      name:'Set',
      component:Set
    },
    {
      path:'/account',
      name:'Account',
      component:Account
    },
    {
      path:'/resetcode1',
      name:'Resetcode1',
      component:Resetcode1
    },
    {
      path:'/changename',
      name:'ChangeName',
      component:ChangeName
    },
    {
      path:'/bindphone',
      name:'BindPhone',
      component:BindPhone
    },
    {
      path:'/invitecode',
      name:'InviteCode',
      component:InviteCode
    },
    {
      path:'/changehead',
      name:'ChangeHead',
      component:ChangeHead,
      children:[
        {
          path:'/changehead1',
          name:'ChangeHead1',
          component:ChangeHead1,
        }
      ]
    },
    {
      path:'/prcode',
      name:'PrCode',
      component:PrCode,
      children:[
        {
          path:'/prcode1',
          name:'PrCode1',
          component:PrCode1,
        }
      ]
    },
    {
      path:'/personinfo',
      name:'PersonInfo',
      component:PersonInfo
    },
    {
      path:'/logistics/:numlist/:logistics',
      name:'Logistics',
      component:Logistics
    },
    {
      path:'/orderinfo',
      name:'OrderInfo',
      component:OrderInfo
    },
    {
      path:'/order/:num',
      name:'Order',
      component:Order,
      children:[
        {
          path:'/list0',
          name:'List0',
          component:List0
        },
        {
          path:'/list1',
          name:'List1',
          component:List1
        },
        {
          path:'/list2',
          name:'List2',
          component:List2
        },
        {
          path:'/list3',
          name:'List3',
          component:List3
        },
        {
          path:'/list4',
          name:'List4',
          component:List4
        },
        {
          path:'/list5',
          name:'List5',
          component:List5
        }
      ]
    },

    {
      path:'/register1',
      name:'Register1',
      component:Register1
    },
    {
      path:'/withdraw',
      name:'WithDraw',
      component:WithDraw,
      children:[
        {
          path:'/withdr',
          name:'WithDr',
          component:WithDr,
        }
      ]
    },
    {
      path:'/person',
      name:'PersonalCenter',
      component: PersonalCenter,
      children:[

        {
          path:'/register',
          name:'Register',
          component:Register
        },
        {
          path:'/forget/:num',
          name:'Forget',
          component:Forget,
          redirect:'/forget1',
          children:[
            {
              path:'/forget1',
              name:'Forget1',
              component:Forget1,
            }
          ]
        },
        {
          path:'/setcode',
          name:'SetCode',
          component:SetCode,
          children:[
            {
              path:'code/:str',
              name:'Code',
              component:Code,
            }
          ]
        },
        {
          path:'/resetcode',
          name:'ResetCode',
          component:ResetCode,
          children:[
            {
              path:'code/:str',
              name:'Code',
              component:Code,
            }
          ]
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
          redirect:'/login1',
          children:[
            {
              path:'/login1',
              name:'Login1',
              component:Login1
            },
            {
              path:'/login2/:num',
              name:'Login2',
              component:Login2
            },
            {
              path:'/login3/:num',
              name:'Login3',
              component:Login3
            },

          ],
        },

      ]
    },

  ]
})
