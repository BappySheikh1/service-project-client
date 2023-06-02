import React from 'react';

const Faq = () => {
    return (
      <div>
        <section className=" dark:text-gray-00">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              How it works
            </p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
              <div>
                <h3 className="font-semibold">
                  How can I purchase prints or licenses of the wildlife
                  photographs?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  Typically, there will be information provided on the website
                  regarding the process of purchasing prints or licenses. This
                  may involve contacting the photographer directly or using an
                  online platform to make the purchase.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Are the photographs available for commercial use?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  The usage rights of the photographs may vary. Some
                  photographers may offer their work for commercial use, while
                  others may only allow personal use. The website should provide
                  information about the usage rights and any applicable
                  licensing agreements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Can I submit my own wildlife photographs to be featured on the
                  website?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  The website may have a section or a separate page dedicated to
                  submission guidelines for photographers interested in having
                  their work showcased. It may outline the requirements, such as
                  image resolution, file format, and any specific themes or
                  subject matter preferred by the website.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Are there any photography workshops or events organized by the
                  website?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  The website may have a section dedicated to workshops or
                  events where photographers can learn from professionals,
                  participate in photography tours, or attend exhibitions.
                  Details about upcoming events, dates, and registration
                  processes should be provided.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Faq;