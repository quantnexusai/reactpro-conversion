'use client'

import { useState } from 'react'

const tabs = ['performance', 'code', 'responsive'] as const
type TabType = typeof tabs[number]

export default function Demo() {
  const [activeTab, setActiveTab] = useState<TabType>('performance')

  return (
    <section id="demo" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
          Experience the React Advantage
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          See how React outperforms traditional WordPress in speed, scalability, and maintainability.
        </p>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                activeTab === tab
                  ? 'bg-primary-900 text-white'
                  : 'bg-white text-primary-900 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="card">
          {activeTab === 'performance' && <PerformanceTab />}
          {activeTab === 'code' && <CodeTab />}
          {activeTab === 'responsive' && <ResponsiveTab />}
        </div>
      </div>
    </section>
  )
}

function PerformanceTab() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">Performance Boost</h3>
      <p className="text-gray-600 mb-6">
        React delivers up to 70% faster load times and optimized resource usage.
      </p>
      <div className="flex justify-around items-end h-64 border-b border-gray-200">
        <div className="text-center">
          <div className="w-16 bg-red-500 h-48 rounded-t mx-auto" />
          <p className="mt-2 text-sm text-gray-600">WordPress (2.5s)</p>
        </div>
        <div className="text-center">
          <div className="w-16 bg-primary-900 h-20 rounded-t mx-auto" />
          <p className="mt-2 text-sm text-gray-600">React (1.0s)</p>
        </div>
      </div>
    </div>
  )
}

function CodeTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 text-white p-4 rounded-lg text-left">
        <h4 className="text-lg font-semibold mb-2">WordPress PHP</h4>
        <pre className="text-sm overflow-x-auto">
{`<?php
while ( have_posts() ) : the_post();
  ?>
  <article id="post-<?php the_ID(); ?>">
    <h1><?php the_title(); ?></h1>
    <?php the_content(); ?>
  </article>
<?php endwhile; ?>`}
        </pre>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg text-left">
        <h4 className="text-lg font-semibold mb-2">React Component</h4>
        <pre className="text-sm overflow-x-auto">
{`const Post = ({ post }) => (
  <article className="post">
    <h1>{post.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: post.content
      }}
    />
  </article>
);`}
        </pre>
      </div>
    </div>
  )
}

function ResponsiveTab() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">Responsive Excellence</h3>
      <p className="text-gray-600 mb-6">
        Seamless adaptation to any screen size with modern CSS frameworks.
      </p>
      <div className="flex justify-center gap-8">
        <div className="border-8 border-gray-800 rounded-2xl overflow-hidden w-48">
          <div className="p-4 bg-white h-64">
            <div className="h-4 bg-primary-200 rounded mb-2" />
            <div className="h-3 bg-gray-200 rounded mb-2" />
            <div className="h-3 bg-gray-200 rounded mb-2 w-3/4" />
            <div className="h-20 bg-primary-100 rounded mt-4" />
          </div>
        </div>
        <div className="hidden md:block border-8 border-gray-800 rounded-2xl overflow-hidden w-80">
          <div className="p-4 bg-white h-64">
            <div className="h-4 bg-primary-200 rounded mb-2 w-1/2" />
            <div className="h-3 bg-gray-200 rounded mb-2" />
            <div className="h-3 bg-gray-200 rounded mb-2" />
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="h-16 bg-primary-100 rounded" />
              <div className="h-16 bg-primary-100 rounded" />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">Mobile and tablet optimized layouts</p>
    </div>
  )
}
