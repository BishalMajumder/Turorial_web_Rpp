import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Empowering Your Learning Journey with High-Quality Tutorials
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Welcome to Tutorial Hub, your go-to destination for high-quality, easy-to-follow tutorials on a wide range of topics. Our mission is to empower learners of all levels by providing comprehensive and accessible resources that cater to their educational needs. Whether you're a beginner looking to master the basics or an advanced user seeking to hone your skills, Tutorial Hub is here to support your journey.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Join us at Tutorial Hub and embark on a journey of discovery, growth, and success. Together, let's unlock your full potential and achieve your learning goals.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}