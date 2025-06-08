import React from 'react'
import { GlowingEffect } from './ui/glowing-effect'
import { GlowingEffectDemo } from './Glowingeffectdemo'


const Collaborate = () => {
  return (
    <>      
    <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-5 pt-[60px]">Wanna Collaborate?</h1>
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center py-10">
        <GlowingEffectDemo/>
    </div>
    </>
  )
}

export default Collaborate
