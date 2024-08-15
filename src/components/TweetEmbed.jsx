import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const App = () => {
  return (
    <div className="flex w-full max-w-[600px] items-center justify-center">
      <TwitterTweetEmbed tweetId={'1824208235475198311'} />
    </div>
  )
}

export default App
