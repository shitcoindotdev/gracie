import Button from './components/Button'
import banner from './assets/banner.jpeg'
import gracie3 from './assets/gracie.jpeg'
import Marquee from './components/Marquee'
import gracie from './assets/cracie.webp'
import gracie2 from './assets/gracietweeet.png'
import FloatingEmojis from './components/FloatingEmojis'
import gracielogo from './assets/gracielogo.png'
function App() {
  return (
    <>
      <FloatingEmojis />
      <div
        className="relative z-20 w-full max-w-[1200px] overflow-hidden"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        <div>
          <img
            src={gracielogo}
            className="h-16 w-auto mx-2 my-2 sm:h-24 sm:mt-4"
            alt="gracie logo"
          />
        </div>
        <main className="w-full mt-4 flex flex-col items-center">
          <div className="mx-[5vw] lg:mb-40 justify-between lg:justify-center sm:items-center lg:gap-12 flex">
            <div className="max-w-[40%] flex flex-col gap-4">
              <p className="italic text-[20px] sm:text-[36px] lg:text-[52px] font-semibold">
                "Gracie's the real star of the show."
              </p>
              <p className="font-medium text-[14px] sm:text-[18px] lg:text-[28px] text-black/75">
                - Noland Arbaugh, Worlds first Neuralink transplant recipient
              </p>
            </div>
            <div className="max-w-[50%]">
              <img
                className="rounded-full w-full max-w-[500px] max-h-[500px]"
                src={gracie3}
                alt="noland"
              />
            </div>
          </div>
          <a
            href="https://x.com/ModdedQuad/status/1824208235475198311"
            target="_blank"
            className="rounded-xl overflow-hidden p-4"
          >
            <img
              className="w-[600px] rounded-xl max-w-full h-auto"
              src={gracie2}
              width="600"
              height="600"
            />
          </a>
          <div className="w-full flex justify-center gap-4 flex-col items-center my-8 lg:mb-40">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-3xl font-bold sm:text-[52px]">$Gracie</h1>
              <h2 className="text-[9px] sm:text-[18px] text-black/75">
                HE3bra2UhdhBrCX1yzLHFVjFaFp591zSMvYzo3ropump
              </h2>
            </div>
            <Button
              target="_blank"
              href="https://pump.fun/HE3bra2UhdhBrCX1yzLHFVjFaFp591zSMvYzo3ropump"
              text="Buy on Pump"
              pill
            />
          </div>
          <div className="flex justify-between lg:justify-center mx-4 max-w-[1200px] my-8 lg:gap-20 lg:mb-40">
            <div className="w-[70%] flex flex-col items-center gap-2 lg:w-fit">
              <img
                className="w-[100%] lg:w-fit h-auto rounded-xl shadow-lg max-w-[666px]"
                src={gracie}
                alt="gracie"
              />
              <p className="font-semibold text-center sm:text-[20px]">
                The cutest Neuralink companion you could wish for
              </p>
            </div>
            <div className="flex gap-1 mx-auto justify-start lg:justify-center flex-col items-center rounded-xl">
              <div className="flex items-center">
                <ul className="m-auto flex flex-col items-center xl:flex-row sm:gap-8 xl:gap-10 justify-center gap-4">
                  <li>
                    <a target="_blank" href="https://x.com/gracieneuralink">
                      <svg
                        className="h-8 sm:h-14 lg:h-20 w-auto"
                        stroke="currentColor"
                        fill="#1DA1F2"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        focusable="false"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://t.me/GRACIECTO">
                      <svg
                        className="h-8 sm:h-14 lg:h-20 w-auto"
                        stroke="currentColor"
                        fill="#0088CC"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        focusable="false"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://dexscreener.com/solana/6klgpnbpbzmuiuvcueebrhva4maqrknrcryiknyr8cdj"
                    >
                      <svg
                        className="h-8 sm:h-14 lg:h-20 w-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="#00000095"
                        fillRule="evenodd"
                        viewBox="0 0 252 300"
                        focusable="false"
                      >
                        <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197" />
                        <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.dextools.io/app/en/solana/pair-explorer/6kLgPnBpBzMUiUvcUEebrHva4MAQRknrcRYiknYR8cdj?t=1718881339333"
                    >
                      <svg
                        className="h-8 sm:h-14 lg:h-20 w-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height="2500"
                        viewBox="0 -.058 754.779 867.058"
                        width="2174"
                      >
                        <path
                          clipRule="evenodd"
                          d="m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z"
                          fill="#05a3c9"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section id="faq" className="flex flex-col gap-4 px-4 py-16">
            <div className="rounded-xl bg-[#e22e7c] text-white">
              <div>
                <details className="group peer">
                  <summary className="flex cursor-pointer items-center gap-2 px-4 py-2">
                    <h2 className="text-left font-semibold">
                      Who is Noland Arbaugh?
                    </h2>
                  </summary>
                </details>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-in-out peer-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="group-open:border-t-1 mx-4 -translate-y-3 border-t border-white py-3 text-left text-rose-50 transition-all duration-[250ms] ease-in-out">
                      Noland Arbaugh is the first human to receive a Neuralink
                      brain-computer interface implant. After a 2016 swimming
                      accident left him quadriplegic, Arbaugh received the
                      implant in early 2024. The device allows him to control a
                      computer cursor with his thoughts, enhancing his digital
                      autonomy despite some initial technical issues​
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-[#e22e7c] text-white">
              <div>
                <details className="group peer">
                  <summary className="flex cursor-pointer items-center gap-2 px-4 py-2">
                    <h2 className="text-left font-semibold">Who is Gracie?</h2>
                  </summary>
                </details>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-in-out peer-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="group-open:border-t-1 mx-4 flex -translate-y-3 flex-col gap-4 border-t border-white py-3 text-left text-rose-50 transition-all duration-[250ms] ease-in-out">
                      <p>
                        Gracie is Nolands Golden Doodle and will be the first
                        Dog to receive a Neuralink chip
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Marquee imageSrc={banner} altText="neurolution" speed="10" />
    </>
  )
}

export default App
