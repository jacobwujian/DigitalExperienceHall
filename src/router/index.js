import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '@/components/HomeScreen/HomeScreen'
import Leader from '@/components/HomeScreen/MainScreen'
import MainScreen from '../components/MidScreen/MainScreen'
import LeftScreen from '../components/HomeScreen/LeftScreem'
import RightScreem from '../components/HomeScreen/RightScreem'
import Mid from '@/components/HomeScreen/MidMainScreem'
import MidLeft from '../components/HomeScreen/MidLeftScreem'
import MidRight from '../components/HomeScreen/MidRightScreem'
import Normal from '@/components/HomeScreen/NormalMainScreem'
import NormalLeft from '../components/HomeScreen/NormalLeftScreem'
import NormalRight from '../components/HomeScreen/NormalRightScreem'
import HRPs from '@/components/HomeScreen/HRPsMainScreem'
import HRPsLeft from '../components/HomeScreen/HRPsLeftScreem'
import HRPsRight from '../components/HomeScreen/HRPsRightScreem'
import HRPsMain01 from '../components/HomeScreen/HRPsMainScreem01'
import HRPsLeft01 from '../components/HomeScreen/HRPsLeftScreem01'
import HRPsRight01 from '../components/HomeScreen/HRPsRightScreem01'
import HRPsMain02 from '../components/HomeScreen/HRPsMainScreem02'
import HRPsLeft02 from '../components/HomeScreen/HRPsLeftScreem02'
import HRPsRight02 from '../components/HomeScreen/HRPsRightScreem02'
import HRPsMain03 from '../components/HomeScreen/HRPsMainScreem03'
import HRPsLeft03 from '../components/HomeScreen/HRPsLeftScreem03'
import HRPsRight03 from '../components/HomeScreen/HRPsRightScreem03'
import HRPsMain04 from '../components/HomeScreen/HRPsMainScreem04'
import HRPsLeft04 from '../components/HomeScreen/HRPsLeftScreem04'
import HRPsRight04 from '../components/HomeScreen/HRPsRightScreem04'
import HRPsMain05 from '../components/HomeScreen/HRPsMainScreem05'
import HRPsLeft05 from '../components/HomeScreen/HRPsLeftScreem05'
import HRPsRight05 from '../components/HomeScreen/HRPsRightScreem05'
import HRPsMain06 from '../components/HomeScreen/HRPsMainScreem06'
import HRPsLeft06 from '../components/HomeScreen/HRPsLeftScreem06'
import HRPsRight06 from '../components/HomeScreen/HRPsRightScreem06'
import HRPsMain07 from '../components/HomeScreen/HRPsMainScreem07'
import HRPsLeft07 from '../components/HomeScreen/HRPsLeftScreem07'
import HRPsRight07 from '../components/HomeScreen/HRPsRightScreem07'
import HRPsMain08 from '../components/HomeScreen/HRPsMainScreem08'
import HRPsLeft08 from '../components/HomeScreen/HRPsLeftScreem08'
import HRPsRight08 from '../components/HomeScreen/HRPsRightScreem08'
import HRPsMain09 from '../components/HomeScreen/HRPsMainScreem09'
import HRPsLeft09 from '../components/HomeScreen/HRPsLeftScreem09'
import HRPsRight09 from '../components/HomeScreen/HRPsRightScreem09'
import HRPsMain10 from '../components/HomeScreen/HRPsMainScreem10'
import HRPsLeft10 from '../components/HomeScreen/HRPsLeftScreem10'
import HRPsRight10 from '../components/HomeScreen/HRPsRightScreem10'
import HRPsMain11 from '../components/HomeScreen/HRPsMainScreem11'
import HRPsLeft11 from '../components/HomeScreen/HRPsLeftScreem11'
import HRPsRight11 from '../components/HomeScreen/HRPsRightScreem11'
import HRPsMain12 from '../components/HomeScreen/HRPsMainScreem12'
import HRPsLeft12 from '../components/HomeScreen/HRPsLeftScreem12'
import HRPsRight12 from '../components/HomeScreen/HRPsRightScreem12'
import HRPsLeft0701 from '../components/HomeScreen/HRPsLeftScreem0701'
import HRPsLeft0702 from '../components/HomeScreen/HRPsLeftScreem0702'
import HRPsLeft0703 from '../components/HomeScreen/HRPsLeftScreem0703'
import HRPsLeft0704 from '../components/HomeScreen/HRPsLeftScreem0704'
import HRPsLeft0705 from '../components/HomeScreen/HRPsLeftScreem0705'
import HRPsMain0701 from '../components/HomeScreen/HRPsMainScreem0701'
import HRPsMain0702 from '../components/HomeScreen/HRPsMainScreem0702'
import HRPsMain0703 from '../components/HomeScreen/HRPsMainScreem0703'
import HRPsMain0704 from '../components/HomeScreen/HRPsMainScreem0704'
import HRPsMain0705 from '../components/HomeScreen/HRPsMainScreem0705'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeScreen',
      component: HomeScreen
    },
    {
      path: '/Leader',
      name: 'Leader',
      component: Leader
    },
    {
      path: '/main',
      name: 'main',
      component: MainScreen
    },
    {
      path: '/left',
      name: 'left',
      component: LeftScreen
    },
    {
      path: '/right',
      name: 'right',
      component: RightScreem
    },
    {
      path: '/Mid',
      name: 'Mid',
      component: Mid
    },
    {
      path: '/MidLeft',
      name: 'MidLeft',
      component: MidLeft
    },
    {
      path: '/MidRight',
      name: 'MidRight',
      component: MidRight
    },
    {
      path: '/Normal',
      name: 'Normal',
      component: Normal
    },
    {
      path: '/NormalLeft',
      name: 'NormalLeft',
      component: NormalLeft
    },
    {
      path: '/NormalRight',
      name: 'NormalRight',
      component: NormalRight
    },
    {
      path: '/HRPs',
      name: 'HRPs',
      component: HRPs
    },
    {
      path: '/HRPsLeft',
      name: 'HRPsLeft',
      component: HRPsLeft
    },
    {
      path: '/HRPsRight',
      name: 'HRPsRight',
      component: HRPsRight
    },
    {
      path: '/HRPsMain01',
      name: 'HRPsMain01',
      component: HRPsMain01
    },
    {
      path: '/HRPsLeft01',
      name: 'HRPsLeft01',
      component: HRPsLeft01
    },
    {
      path: '/HRPsRight01',
      name: 'HRPsRight01',
      component: HRPsRight01
    },
    {
      path: '/HRPsMain02',
      name: 'HRPsMain02',
      component: HRPsMain02
    },
    {
      path: '/HRPsLeft02',
      name: 'HRPsLeft02',
      component: HRPsLeft02
    },
    {
      path: '/HRPsRight02',
      name: 'HRPsRight02',
      component: HRPsRight02
    },
    {
      path: '/HRPsMain03',
      name: 'HRPsMain03',
      component: HRPsMain03
    },
    {
      path: '/HRPsLeft03',
      name: 'HRPsLeft03',
      component: HRPsLeft03
    },
    {
      path: '/HRPsRight03',
      name: 'HRPsRight03',
      component: HRPsRight03
    },
    {
      path: '/HRPsMain04',
      name: 'HRPsMain04',
      component: HRPsMain04
    },
    {
      path: '/HRPsLeft04',
      name: 'HRPsLeft04',
      component: HRPsLeft04
    },
    {
      path: '/HRPsRight04',
      name: 'HRPsRight04',
      component: HRPsRight04
    },
    {
      path: '/HRPsMain05',
      name: 'HRPsMain05',
      component: HRPsMain05
    },
    {
      path: '/HRPsLeft05',
      name: 'HRPsLeft05',
      component: HRPsLeft05
    },
    {
      path: '/HRPsRight05',
      name: 'HRPsRight05',
      component: HRPsRight05
    },
    {
      path: '/HRPsMain06',
      name: 'HRPsMain06',
      component: HRPsMain06
    },
    {
      path: '/HRPsLeft06',
      name: 'HRPsLeft06',
      component: HRPsLeft06
    },
    {
      path: '/HRPsRight06',
      name: 'HRPsRight06',
      component: HRPsRight06
    },
    {
      path: '/HRPsMain07',
      name: 'HRPsMain07',
      component: HRPsMain07
    },
    {
      path: '/HRPsLeft07',
      name: 'HRPsLeft07',
      component: HRPsLeft07
    },
    {
      path: '/HRPsRight07',
      name: 'HRPsRight07',
      component: HRPsRight07
    },
    {
      path: '/HRPsMain08',
      name: 'HRPsMain08',
      component: HRPsMain08
    },
    {
      path: '/HRPsLeft08',
      name: 'HRPsLeft08',
      component: HRPsLeft08
    },
    {
      path: '/HRPsRight08',
      name: 'HRPsRight08',
      component: HRPsRight08
    },
    {
      path: '/HRPsMain09',
      name: 'HRPsMain09',
      component: HRPsMain09
    },
    {
      path: '/HRPsLeft09',
      name: 'HRPsLeft09',
      component: HRPsLeft09
    },
    {
      path: '/HRPsRight09',
      name: 'HRPsRight09',
      component: HRPsRight09
    },
    {
      path: '/HRPsMain10',
      name: 'HRPsMain10',
      component: HRPsMain10
    },
    {
      path: '/HRPsLeft10',
      name: 'HRPsLeft10',
      component: HRPsLeft10
    },
    {
      path: '/HRPsRight10',
      name: 'HRPsRight10',
      component: HRPsRight10
    },
    {
      path: '/HRPsMain11',
      name: 'HRPsMain11',
      component: HRPsMain11
    },
    {
      path: '/HRPsLeft11',
      name: 'HRPsLeft11',
      component: HRPsLeft11
    },
    {
      path: '/HRPsRight11',
      name: 'HRPsRight11',
      component: HRPsRight11
    },
    {
      path: '/HRPsMain12',
      name: 'HRPsMain12',
      component: HRPsMain12
    },
    {
      path: '/HRPsLeft12',
      name: 'HRPsLeft12',
      component: HRPsLeft12
    },
    {
      path: '/HRPsRight12',
      name: 'HRPsRight12',
      component: HRPsRight12
    },
    {
      path: '/HRPsLeft0701',
      name: 'HRPsLeft0701',
      component: HRPsLeft0701
    },
    {
      path: '/HRPsLeft0702',
      name: 'HRPsLeft0702',
      component: HRPsLeft0702
    },
    {
      path: '/HRPsLeft0703',
      name: 'HRPsLeft0703',
      component: HRPsLeft0703
    },
    {
      path: '/HRPsLeft0704',
      name: 'HRPsLeft0704',
      component: HRPsLeft0704
    },
    {
      path: '/HRPsLeft0705',
      name: 'HRPsLeft0705',
      component: HRPsLeft0705
    },
    {
      path: '/HRPsMain0701',
      name: 'HRPsMain0701',
      component: HRPsMain0701
    },
    {
      path: '/HRPsMain0702',
      name: 'HRPsMain0702',
      component: HRPsMain0702
    },
    {
      path: '/HRPsMain0703',
      name: 'HRPsMain0703',
      component: HRPsMain0703
    },
    {
      path: '/HRPsMain0704',
      name: 'HRPsMain0704',
      component: HRPsMain0704
    },
    {
      path: '/HRPsMain0705',
      name: 'HRPsMain0705',
      component: HRPsMain0705
    }
  ]
})
