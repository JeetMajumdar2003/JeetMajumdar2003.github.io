# Jeet's personal portfolio using HTML CSS and Tailwind CSS.
<!-- add my website into github pages -->

## Table of contents
- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
### The project
- This is a personal portfolio website that I made using HTML, CSS and Tailwind CSS. I made this website to showcase my skills and projects that I have worked on. I also wanted to learn Tailwind CSS and this project helped me to learn it. I also used some JavaScript to make the website more interactive.

### Screenshot
![screenshot](./images/screenshot.png)

### Links
- Live Site URL: [Live Site](https://jeet-portfolio.netlify.app/)
- GitHub Repo URL: [GitHub Repo](https://github.com/JeetMajumdar2003/JeetMajumdar2003.github.io)

## My process
### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwind CSS
- JavaScript

### What I learned
- I learned how to use Tailwind CSS and how to make a responsive website using Tailwind CSS. I also learned how to use JavaScript to make the website more interactive.
- I learned how to use Tailwind CSS to make a responsive navbar.
- I learned how to use Tailwind CSS to make a responsive grid layout.
- I learned how to use Tailwind CSS to make a responsive card layout.
- I learned how to use Tailwind CSS to make a responsive footer.

```html
<!-- Navber goes here -->
        <nav class="w-full h-20 bg-white flex justify-between px-4 items-center md:px-4 fixed">
            <div class="cursor-pointer hover:text-sky-500 flex flex-wrap flex-row items-center text-center">
                <div class="w-12">
                    <img class="rounded-full" src="IMG_20221205_132319-removebg-preview.jpg" alt="">
                </div>
                <span class="flex flex-row font-semibold p-4">JEET MAJUMDAR</span>
            </div>
            <ul class="hidden md:flex font-semibold">
                <li><a class="mx-[10px] cursor-pointer hover:text-sky-500" href="#">HOME</a></li>
                <li><a class="mx-[10px] cursor-pointer hover:text-sky-500" href="./#about">ABOUT</a></li>
                <li><a class="mx-[10px] cursor-pointer hover:text-sky-500" href="./#projects">PROJECTS</a></li>
                <li><a class="mx-[10px] cursor-pointer hover:text-sky-500" href="./#contact">CONTACT</a></li>
            </ul>
            <div
                class="hidden md:block px-3 py-2 bg-sky-500 rounded-md text-white font-semibold hover:text-sky-700 hover:bg-sky-300">
                <button>Login / Register</button>
            </div>
            <div class="md:hidden">
                <a class="text-5xl" href="#">&#8801</a>
            </div>
        </nav>
        <!-- Navber ends here -->
    </header>

    <!-- HOME section goes here -->
    <section class="bg-sky-500 h-[600px]">
        <div class="p-40 flex flex-wrap flex-col items-center text-center">
            <h1 class="text-white font-bold text-3xl md:text-5xl text-center">HEY, MY NAME IS JEET MAJUMDAR</h1>
            <p class="p-12 text-lg text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ducimus tempora reiciendis, ipsam totam veritatis in! Doloribus mollitia ducimus nulla
                tenetur culpa, nemo autem sed consectetur aliquid officiis quod cum.</p>
            <a class="bg-white font-bold p-4 rounded-lg" href="./#about">ABOUT</a>
        </div>
    </section>
    <!-- HOME section ends here -->

    <!-- About section goes here -->
    <section id="about" class="bg-slate-100 h-auto flex flex-wrap flex-col items-center justify-items-center">
        <div class="px-48 flex flex-wrap flex-col items-center text-center">
            <h1 class="font-bold text-2xl md:text-4xl text-center mt-4">ABOUT</h1>
            <span class="w-12 h-1 border-b-4 border-sky-500 rounded-lg my-4"></span>
            <span class="px-56 text-slate-500 font-semibold pb-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                tempora explicabo quae quod deserunt eius sapiente
            </span>
        </div>

        <div class="flex flex-col md:flex-row justify-center w-[90%]">
            <div class="flex flex-col flex-wrap justify-start px-12 w-[45%]">
                <h3 class="font-bold text-2xl">Get to know me!</h3>
                <div class="">
                    <p class="py-8 text-slate-600">
                        Hey! It's
                        <strong>Jeet Majumdar</strong>
                        and I'm a <strong> Frontend Web Developer </strong> located in
                        Kolkata. I've done
                        <strong> remote </strong>
                        projects for agencies, consulted for startups, and collaborated
                        with talented people to create
                        <strong>digital products </strong>
                        for both business and consumer use.
                    </p>
                    <p class="text-slate-600">
                        I'm a bit of a digital product junky. Over the years, I've used
                        hundreds of web and mobile apps in different industries and
                        verticals. Feel free to
                        <strong>contact</strong> me here.
                    </p>
                </div>
                <span class="my-12"><a href="./#contact"
                        class="bg-sky-500 text-white font-bold p-4 rounded-lg">Contact</a></span>
            </div>


            <div class="flex flex-col flex-wrap justify-start px-12 w-[45%]">
                <h3 class="font-bold text-2xl">My Skills</h3>
                <div class="flex flex-row flex-wrap mt-8">
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">HTML</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">CSS</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">JavaScript</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">React</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">SASS</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">GIT</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">Shopify</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">Wordpress</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">Google ADS</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">Facebook Ads</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">Android</div>
                    <div class="bg-slate-300 text-slate-500 font-bold m-2 p-2 rounded-lg">IOS</div>
                </div>
            </div>
        </div>
    </section>
    <!-- About section ends here -->

    <!-- PROJECTS section goes here -->
    <section id="projects" class="bg-slate-200 h-auto">
        <div class="px-48 flex flex-wrap flex-col items-center text-center">
            <h1 class="font-bold text-2xl md:text-4xl text-center mt-4">PROJECTS</h1>
            <span class="w-12 h-1 border-b-4 border-sky-500 rounded-lg my-4"></span>
            <span class="px-56 text-slate-500 font-semibold pb-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                tempora explicabo quae quod deserunt eius sapiente
            </span>


            <div class="flex flex-col flex-wrap content-center">
                <div class="pb-12 flex flex-col md:flex-row justify-between">
                    <div class="w-[900px] flex flex-row justify-between">
                        <img src="https://dopefolio.netlify.app/assets/jpeg/project-mockup-example.jpeg"
                            alt="Software Screenshot" class="" loading="lazy">
                    </div>
                    <div class="m-8 flex flex-row flex-wrap justify-between">
                        <h3 class="font-bold text-2xl">Project 1</h3>
                        <p class="my-4 text-lg text-slate-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                            facilis tempora, explicabo quae quod deserunt eius sapiente
                            praesentium.
                        </p>
                        <a href="./#projects" class="bg-sky-500 text-white font-bold  p-4 rounded-lg"
                            target="_blank">Case
                            Study</a>
                    </div>
                </div>

                <div class="flex flex-col flex-wrap content-center">
                    <div class="pb-12 flex flex-col md:flex-row justify-between">
                        <div class="w-[900px] flex flex-row justify-between">
                            <img src="https://dopefolio.netlify.app/assets/jpeg/project-mockup-example.jpeg"
                                alt="Software Screenshot" class="" loading="lazy">
                        </div>
                        <div class="m-8 flex flex-row flex-wrap justify-between">
                            <h3 class="font-bold text-2xl">Project 2</h3>
                            <p class="my-4 text-lg text-slate-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                facilis tempora, explicabo quae quod deserunt eius sapiente
                                praesentium.
                            </p>
                            <a href="./#projects" class="bg-sky-500 text-white font-bold  p-4 rounded-lg"
                                target="_blank">Case
                                Study</a>
                        </div>
                    </div>

                    <div class="flex flex-col flex-wrap content-center">
                        <div class="pb-12 flex flex-col md:flex-row justify-between">
                            <div class="w-[900px] flex flex-row justify-between">
                                <img src="https://dopefolio.netlify.app/assets/jpeg/project-mockup-example.jpeg"
                                    alt="Software Screenshot" class="" loading="lazy">
                            </div>
                            <div class="m-8 flex flex-row flex-wrap justify-between">
                                <h3 class="font-bold text-2xl">Project 3</h3>
                                <p class="my-4 text-lg text-slate-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                    facilis tempora, explicabo quae quod deserunt eius sapiente
                                    praesentium.
                                </p>
                                <a href="./#projects" class="bg-sky-500 text-white font-bold  p-4 rounded-lg"
                                    target="_blank">Case
                                    Study</a>
                            </div>
                        </div>






                    </div>
                </div>
    </section>
    <!-- PROJECTS section ends here -->

    <!-- CONTACT section goes here -->
    <section id="contact" class="bg-sky-500 h-auto">
        <div class="flex flex-col items-center">
            <h2 class="font-bold text-white text-2xl md:text-4xl text-center mt-4">CONTACT</h2>
            <span class="w-12 h-1 border-b-4 border-white rounded-lg my-4"></span>

            <span class="px-56 text-white font-semibold text-xl pb-12 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                tempora explicabo quae quod deserunt eius sapiente
            </span>

            <div class="bg-white rounded-lg m-8 p-6 w-[60%]">
                <form action="#" class="text-lg font-semibold">
                    <div class="pb-4 flex flex-col flex-wrap">
                        <label class="pb-2" for="name">Name</label>
                        <input required="" placeholder="Enter Your Name" type="text" class="bg-slate-300 p-4 rounded-md"
                            name="name" id="name">
                    </div>
                    <div class="pb-4 flex flex-col flex-wrap">
                        <label class="pb-2" for="email">Email</label>
                        <input required="" placeholder="Enter Your Email" type="text"
                            class="bg-slate-300 p-4 rounded-md" name="email" id="email">
                    </div>
                    <div class="pb-4 flex flex-col flex-wrap">
                        <label class="pb-2" for="message">Message</label>
                        <textarea required="" cols="30" rows="10" class="bg-slate-300 p-4 rounded-md max-h-52 h-fit"
                            placeholder="Enter Your Message" name="message" id="message"></textarea>
                    </div>
                    <button type="submit"
                        class="p-2 px-3 bg-sky-500 rounded-md text-white font-semibold hover:text-sky-600 hover:bg-sky-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </section>
    <!-- CONTACT section ends here -->


    <!-- Footer section starts here -->
    <footer class="w-full bg-slate-900 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-center">
        <div class="mb-12 flex flex-col justify-center w-[80%]">
            <div class="flex flex-col md:flex-row flex-wrap justify-between my-16">
                <div class="">
                    <h4 class="font-semibold text-2xl mb-8">JEET MAJUMDAR</h4>
                    <p class="w-[500px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
                        tempora explicabo quae quod deserunt
                    </p>
                </div>
                <div class="ml-20">
                    <h2 class="font-semibold text-2xl mb-8">
                        <span>Social</span>
                    </h2>
                    <div class="flex flex-col md:flex-row flex-wrap justify-between">
                        <a target="_blank" rel="noreferrer" href="#">
                            <img class="w-6 mr-4" src="https://dopefolio.netlify.app/assets/png/linkedin-ico.png"
                                alt="icon">
                        </a>
                        <a target="_blank" rel="noreferrer" href="#">
                            <img class="w-6 mr-4" src="https://dopefolio.netlify.app/assets/png/github-ico.png"
                                alt="icon">
                        </a>
                        <a target="_blank" rel="noreferrer" href="#">
                            <img class="w-6 mr-4" src="https://dopefolio.netlify.app/assets/png/yt-ico.png" alt="icon">
                        </a>
                        <a target="_blank" rel="noreferrer" href="#">
                            <img class="w-6 mr-4" src="https://dopefolio.netlify.app/assets/png/twitter-ico.png"
                                alt="icon">
                        </a>
                        <a target="_blank" rel="noreferrer" href="#">
                            <img class="w-6" src="https://dopefolio.netlify.app/assets/png/insta-ico.png" alt="icon">
                        </a>
                    </div>
                </div>

            </div>

            <div class="flex justify-center text-sm">
                © Copyright 2023. Made by-
                <a rel="noreferrer" target="_blank" href="#">Jeet Majumdar</a>
            </div>

        </div>
    </footer>
    <!-- Footer section ends here -->
```
