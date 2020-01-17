<template>
<section id="about" class="
    lg:pl-4 md:mt-48 relative
    pl-0 mt-16
">
    <h1 class="
        font-bree-serif text-blue-dark
        md:text-4xl
        sm:block
        text-2xl hidden
    ">
        Introduction
    </h1>
    <div class="
        md:pt-12
        pt-4
    ">
        <div class="flex flex-row justify-center sm:block">
            <div class="shape-outside float-left sm:block hidden px-48 py-56 xl:py-48"></div>
            <blob class="shape-blob sm:absolute lg:pl-4 md:pt-2 sm:left-0 sm:-translate-8"/>
        </div>
        <p class="shape-text font-lato font-light text-lg leading-snug sm:pt-0 pt-8">My actual name is Mike de Snoo, but they call me Snoo.<br/>
            I am an UX Designer from Holland (you know, that country with the tulips, windmills<br class="hidden sm:block"/>
            and wooden shoes).<br/><br/>
          
            I'm unapologetically a design generalist, but I particularly love diving deep into<br class="hidden sm:block"/>
            branding, front-end dev, and UX design. Why work with me? I design from a<br class="hidden sm:block"/>
            strategic perspective of telling stories through visual and interactive systems.<br class="hidden sm:block"/>
            That’s right: This isn’t just design that looks pretty, but design that makes your<br class="hidden sm:block"/>
            company more valuable.<br/><br/>

            I do the work I do because I love it. I love to press some buttons and click<br class="hidden sm:block"/>
            on the right places.<br/><br/>

            So here you are, checking me out.<br/>
            I truelly feel flattered, and I hope we can help each other grow.<br/><br/>
        </p>
    </div>
    <div class="flex flex-row items-center w-full sm:w-56 sm:justify-start cursor-pointer justify-center sm:pt-4 pt-3">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="31" height="31" rx="15.5" fill="#51ABCF"/>
            <path d="M20.6863 12.0601L18.3218 20.8848C17.8547 22.628 16.0954 23.8194 14.2243 23.4968C12.0829 23.1287 10.7359 21.096 11.2588 19.1442L14.0212 8.83487C14.314 7.74221 15.4054 6.97081 16.576 7.16826C17.9267 7.39608 18.7716 8.66843 18.4431 9.89455L16.0964 18.6525C15.9735 19.1113 15.4778 19.3807 14.9948 19.2513C14.5118 19.1219 14.2173 18.6407 14.3402 18.1819L16.2958 10.8836C16.3874 10.5416 16.1648 10.1781 15.8048 10.0816C15.4448 9.98512 15.0702 10.1887 14.9786 10.5307L13.0543 17.7122C12.7615 18.8049 13.321 20.0186 14.4335 20.4329C15.7171 20.911 17.085 20.2316 17.4136 19.0054L19.7223 10.3893C20.1894 8.64603 19.2616 6.73462 17.4798 6.0784C15.4325 5.32422 13.2583 6.41339 12.7354 8.36516L9.99308 18.5995C9.35165 20.9933 10.6213 23.631 13.0724 24.5292C15.8943 25.5535 18.8813 24.0653 19.6009 21.3795L22.0035 12.413C22.0951 12.071 21.8726 11.7074 21.5125 11.611C21.1525 11.5145 20.778 11.7181 20.6863 12.0601Z" fill="white"/>
        </svg>
        <a class="pl-4 text-blue-mid font-semibold font-montserrat text-mid" href="/pdf/cv.pdf" target="_blank">View resume</a>
    </div>
</section>
</template>

<script>
import blob from './blob/blob.vue';
export default {
    components: {
        blob
    }
}
</script>

<style lang="scss" scoped>
@supports not (shape-outside: circle()) {
  .shape-outside{
      display: none;
  }
  .shape-blob{
      position: static;
      padding-bottom: 3rem;
  }
}

@supports (shape-outside: circle()) {
  .shape-outside{
    shape-outside: polygon(304.21577911376954px 140.70365371704102px,263.01229095458984px 101.41366729736328px,227.29369506835937px 57.021964645385744px,193.75983428955078px 10.931718063354491px,156.7197196960449px -32.29389019012451px,107.98194427490235px -60.59389171600342px,51.70550079345703px -57.943149185180665px,-0.24174041748046873px -34.816737747192384px,-42.403860092163086px 2.971088409423828px,-68.7814323425293px 53.247519683837886px,-81.41452636718749px 108.71380310058593px,-83.35441246032714px 165.6134262084961px,-76.48922576904296px 222.1465003967285px,-61.54659919738769px 277.09938964843747px,-38.25586357116699px 329.04786987304686px,-5.327626037597656px 375.42078857421876px,39.159735107421874px 410.5878463745117px,93.90725784301758px 424.2899658203125px,149.5771598815918px 413.17260589599607px,203.02699279785156px 393.45963287353516px,253.66419830322266px 367.3853424072266px,299.6236404418945px 333.8035583496094px,336.7879440307617px 290.8391662597656px,355.2264144897461px 237.51314620971678px,341.99666900634764px 182.94182891845702px);
  }
}
</style>