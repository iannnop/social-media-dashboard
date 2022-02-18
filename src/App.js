import Switch from './Switch'
import images from './images'

function App() {
  return (
    <main className='bg-white dark:bg-dark-bg h-max'>
      <header className='bg-light-topbg dark:bg-dark-topbg dark:text-dark-title'>
        <div className='pt-10 md:flex md:justify-between w-11/12 md:w-4/5 m-auto'>
        <div className='border-b-[1px] border-b-light-paragraph dark:border-b-dark-paragraph md:border-b-0'>
          <h1 className='font-bold text-3xl text-light-title dark:text-dark-title'>Social Media Dashboard</h1>
          <p className='font-bold text-md text-light-paragraph dark:text-dark-paragraph'>Total Followers: 23,004</p>
        </div>
        <Switch />
        </div>
      </header>

      {/* Main Dashboard */}
      <div className='md:bg-split-color dark:md:bg-dark-split-color'>
        <div className='py-10 w-11/12 md:w-4/5 m-auto grid auto-rows-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-10'>
          <SocialMediaCard icon={images.iconFacebook} color='bg-facebook' handle='@nathanf' followers='1987' change={12} />
          <SocialMediaCard icon={images.iconTwitter} color='bg-twitter' handle='@nathanf' followers='1044' change={99} />
          <SocialMediaCard icon={images.iconInstagram} color='bg-instagram' handle='@realnathanf' followers='11k' change={1099} />
          <SocialMediaCard icon={images.iconYoutube} color='bg-youtube' handle='Nathan F.' followers='8239' change={-144} />
        </div>
      </div>

      {/* Overview Grid */}
      
      <div className='pb-6 w-11/12 md:w-4/5 m-auto'>
        <h2 className='pb-6 font-bold text-2xl text-light-paragraph dark:text-dark-title'>Overview - Today</h2>
        <div className='grid auto-rows-auto lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-6'>
          <SocialMediaOverviewCard icon={images.iconFacebook} metric='Page Views' metricCount='87' change={3} />
          <SocialMediaOverviewCard icon={images.iconFacebook} metric='Likes' metricCount='52' change={-2} />
          <SocialMediaOverviewCard icon={images.iconInstagram} metric='Likes' metricCount='5462' change={2257} />
          <SocialMediaOverviewCard icon={images.iconInstagram} metric='Profile Views' metricCount='52k' change={1375} />
          <SocialMediaOverviewCard icon={images.iconTwitter} metric='Retweets' metricCount='117' change={303} />
          <SocialMediaOverviewCard icon={images.iconTwitter} metric='Likes' metricCount='507' change={553} />
          <SocialMediaOverviewCard icon={images.iconYoutube} metric='Likes' metricCount='107' change={-19} />
          <SocialMediaOverviewCard icon={images.iconYoutube} metric='Total Views' metricCount='1407' change={-12} />
        </div>
      </div>
    </main>
  )  
}

const SocialMediaCard = ({icon, color, handle, followers, change}) => {
  return (
    <div className={`rounded-md rounded-b-lg pt-[6px] ${color}`}>
      <div className='rounded-b-md text-light-paragraph dark:text-dark-paragraph py-9 grid place-content-center text-center bg-light-card dark:bg-dark-card'>
        <div>
          <p className='font-bold text-base'>
            <img className='w-7 mr-2 inline-block' src={icon} alt='social media icon' />
            {handle}
          </p>
        </div>
        <div className='my-7'>
          <strong className='font-bold text-6xl text-center text-light-title dark:text-dark-title'>{followers}</strong>
          <p className='text-lg uppercase tracking-[0.35em]'>followers</p>
        </div>
        <div>
          <p className={`font-bold text-md ${change > 0 ? 'text-primary-limegreen' : 'text-primary-brightred'}`}>
            <img className='w-3 inline-block mr-1' src={change > 0 ? images.iconUp : images.iconDown} alt='net change icon' />
            {Math.abs(change)} Today
          </p>
        </div>
      </div>
    </div>
  )
}

const SocialMediaOverviewCard = ({ icon, metric, metricCount, change }) => {
  return (
    <div className='px-8 py-9 bg-light-card dark:bg-dark-card rounded-lg  text-light-paragraph dark:text-dark-paragraph'>
      <div className='text-md mb-6 flex justify-between font-bold'>
        <p>{metric}</p>
        <img className='w-7 self-center' src={icon} alt='social media icon'/>
      </div>
      <div className='flex items-end justify-between'>
        <strong className='text-4xl text-light-title dark:text-dark-title'>{metricCount}</strong>
        <p className={`font-bold text-md ${change > 0 ? 'text-primary-limegreen' : 'text-primary-brightred'}`}>
          <img className='w-3 inline-block mr-1' src={change > 0 ? images.iconUp : images.iconDown} alt='net change icon' />
          {Math.abs(change)}%
        </p>
      </div>
    </div>
  )
}

export default App