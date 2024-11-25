import React from 'react'
import { Link } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer class="bg-gray-900 text-gray-400 py-3">
      <div class="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 class="text-white text-lg font-bold mb-4">DOOGEE</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-white">
                  Teardown
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-lg font-bold mb-4">Service</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-white">
                  Compare
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Download
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Bug Report
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-lg font-bold mb-4">Activity</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-white">
                  Influencers
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Co-branding
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Honor
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Giveaway
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-lg font-bold mb-4">Contact</h3>
            <ul>
              <li>
                <Link to>
                  
                </Link>
              </li>
              <li>
                <Link to></Link>
              </li>
              <li>
                <Link to></Link>
              </li>
              <li>
                <Link to></Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-lg font-bold mb-4">
              Newsletter Subscription
            </h3>
            <form class="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                class="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div class="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 DOOGEE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
