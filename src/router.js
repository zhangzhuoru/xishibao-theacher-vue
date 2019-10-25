import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginPage from './views/LoginPage.vue'
import MyHome from './views/MyHome.vue'
import Myself from './views/Myself.vue'
import Findfun from './views/Findfun.vue'
import AddressBook from './views/AddressBook.vue'
import LookAround from './views/LookAround.vue'
import TelephoneCharge from './views/myself/TelephoneCharge.vue'
import Money from './views/myself/Money.vue'
import RechargeRecord from './views/myself/RechargeRecord.vue'
import ChooseADate from './views/myself/ChooseADate.vue'
import EditorData from './views/myself/EditorData.vue'
import ChangePassword from './views/myself/ChangePassword.vue'
import HDAbout from './views/myself/HDAbout.vue'
import SignIn from './views/myhome/SignIn.vue'
import SigninDetail from './views/myhome/SigninDetail.vue'
import Daily from './views/myhome/Daily.vue'
import DailyData from './views/myhome/DailyData.vue'
import Duidance from './views/myhome/Duidance.vue'
import DuidanceData from './views/myhome/DuidanceData.vue'
import DuidanceDataAdd from './views/myhome/DuidanceDataAdd.vue'
import PracticeAskFor from './views/myhome/PracticeAskFor.vue'
import Scored from './views/myhome/Scored.vue'
import Scoring from './views/myhome/Scoring.vue'
import PracticeAskForEnd from './views/myhome/PracticeAskForEnd.vue'
import PracticeAskForEndData from './views/myhome/PracticeAskForEndData.vue'
import PracticeAskForData from './views/myhome/PracticeAskForData.vue'
import Notice from './views/myhome/Notice.vue'
import SendNotice from './views/myhome/SendNotice.vue'
import SendNoticeDetail from './views/myhome/SendNoticeDetail.vue'
import Waiting from './views/myhome/Waiting.vue'
import Leave from './views/myhome/Leave.vue'
import LeaveData from './views/myhome/LeaveData.vue'
import Week from './views/myhome/Week.vue'
import WeekData from './views/myhome/WeekData.vue'
import Month from './views/myhome/Month.vue'
import MonthData from './views/myhome/MonthData.vue'
import Plan from './views/myhome/Plan.vue'
import Invitation from './views/myhome/Invitation.vue'
import WeekSignIn from './views/myhome/WeekSignIn.vue'
import Insurance from './views/myhome/Insurance.vue'
import Book from './views/addressbook/Book.vue'
import Wchet from './views/addressbook/Wchet.vue'
Vue.use(Router)

export default new Router({

  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   redirect: "/home",
    // },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: "/home/myhome",
      children: [
          {
              path: "/home/myhome",
              name:'myhome',
              component: MyHome,
          },
          {
            path: "/home/myself",
            name:'myself',
            component: Myself,
          },
          {
            path: "/home/findfun",
            name:'findfun',
            component: Findfun,
          },
          {
            path: "/home/addressbook",
            name:'addressbook',
            component: AddressBook,
          },
          {
            path: "/home/lookaround",
            name:'lookaround',
            component: LookAround,
          },
      ]
    },
    {
      path: '/telephonecharge',
      name: 'telephonecharge',
      component: TelephoneCharge
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan
    },
    {
      path: '/rechargerecord',
      name: 'rechargerecord',
      component: RechargeRecord
    },
    {
      path: '/chooseadate',
      name: 'chooseadate',
      component: ChooseADate
    },
    {
      path: '/editordata',
      name: 'editordata',
      component: EditorData
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: ChangePassword
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signindetail',
      name: 'signindetail',
      component: SigninDetail
    },
    //日记管理
    {
      path: '/daily',
      name: 'daily',
      component: Daily
    },
    //日记审批
    {
      path: '/dailydata',
      name: 'dailydata',
      component: DailyData
    },
    //巡访管理
    {
      path: '/duidance',
      name: 'duidance',
      component: Duidance
    },
    //巡访详情
    {
      path: '/duidancedata',
      name: 'duidancedata',
      component: DuidanceData
    },
    //新建巡访详情
    {
      path: '/duidancedataadd',
      name: 'duidancedataadd',
      component: DuidanceDataAdd
    },
    {
      path: '/practiceaskfor',
      name: 'practiceaskfor',
      component: PracticeAskFor
    },
    {
      path: '/scored',
      name: 'scored',
      component: Scored
    },
    {
      path: '/scoring',
      name: 'scoring',
      component: Scoring
    },
    {
      path: '/practiceaskforend',
      name: 'practiceaskforend',
      component: PracticeAskForEnd
    },
    {
      path: '/practiceaskforenddata',
      name: 'practiceaskforenddata',
      component: PracticeAskForEndData
    },
    //实习申请审批
    {
      path: '/practiceaskfordata',
      name: 'practiceaskfordata',
      component: PracticeAskForData
    },
    //查看通告
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    //发送通告
    {
      path: '/sendnotice',
      name: 'sendnotice',
      component: SendNotice
    },
    //通告详情
    {
      path: '/sendnoticedetail',
      name: 'sendnoticedetail',
      component: SendNoticeDetail
    },
    // 待办页面
    {
      path: '/waiting',
      name: 'waiting',
      component: Waiting
    },
    // 请假批阅页面
    {
      path: '/leave',
      name: 'leave',
      component: Leave
    },
    // 请假申请批阅页面
    {
      path: '/leavedata',
      name: 'leavedata',
      component: LeaveData
    },
    // 周记管理页面
    {
      path: '/week',
      name: 'week',
      component: Week
    },
    // 周记批阅页面
    {
      path: '/weekdata',
      name: 'weekdata',
      component: WeekData
    },
    // 月记管理页面
    {
      path: '/month',
      name: 'month',
      component: Month
    },
    // 月记批阅页面
    {
      path: '/monthdata',
      name: 'monthdata',
      component: MonthData
    },
    // 邀请老师页面
    {
      path: '/invitation',
      name: 'invitation',
      component: Invitation
    },
    // 考勤周记页面
    {
      path: '/weeksignIn',
      name: 'weeksignIn',
      component: WeekSignIn
    },
    // 保险页面
    {
      path: '/insurance',
      name: 'insurance',
      component: Insurance
    },
    // 通讯录页面
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    // 聊天室页面
    {
      path: '/wchet',
      name: 'wchet',
      component: Wchet
    },
    // 聊天室页面
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    // 关于恒电
    {
      path: '/hdabout',
      name: 'hdabout',
      component: HDAbout
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
