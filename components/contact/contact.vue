<template>
  <section
    id="contact"
    class="lg:px-4 px-0 mt-36 lg:mt-48 flex items-start flex-col justify-between relative z-0"
  >
    <section-title title="Contact" />
    <div
      class="flex flex-col w-full lg:flex-row mt-8 justify-between relative z-10"
    >
      <div
        class="flex flex-grow flex-col rounded-lg overflow-hidden lg:max-w-640px -ml-2 sm:-ml-4 lg:ml-0 w-contact-mobile sm:w-contact lg:w-3/5 bg-white shadow-xl pb-6"
      >
        <div class="bg-blue-dark w-full flex">
          <span class="px-6 py-3 font-semibold text-white text-xl">{{
            $mq === "mobile" ? "Contact" : "New message"
          }}</span>
        </div>
        <div class="px-6 flex flex-col text-lg text-gray-blue f">
          <div
            class="flex w-full pt-5 pb-2 border-b border-gray-border relative"
          >
            <label class="font-semibold md:text-lg text-sm" for="email"
              >From</label
            >
            <input
              v-model="email"
              class="pl-3 bg-none outline-none md:text-lg text-sm flex-grow"
              id="email"
              placeholder="example@domain.com"
            />
            <error
              class="absolute"
              :active="error.type === 'email'"
              :error="error"
            />
          </div>
          <div
            class="w-full flex flex-row pt-5 pb-2 border-b items-center border-gray-border"
          >
            <label class="font-semibold md:text-lg text-sm">To</label>
            <div class="pl-3 flex flex-row">
              <div
                class="bg-light rounded-full flex flex-row items-center pl-1 pr-3 py-1"
              >
                <a
                  tabindex="-1"
                  class="pl-2 select-none md:text-lg font-medium text-sm"
                  href="mailto:snoohd@gmail.com"
                  >snoohd@gmail.com</a
                >
              </div>
            </div>
          </div>
          <div class="w-full pt-5 pb-2 border-b border-gray-border flex">
            <label class="font-semibold md:text-lg text-sm" for="subject"
              >Subject</label
            >
            <input
              v-model="subject"
              class="pl-3 bg-none outline-none md:text-lg text-sm flex-grow"
              placeholder="New job offer"
              id="subject"
            />
          </div>
          <div class="w-full py-5 relative">
            <textarea
              v-model="message"
              id="message"
              class="w-full resize-none lg:h-150px md:h-240px h-150px xl:h-240px bg-none font-normal outline-none md:text-lg text-sm"
              placeholder="Message"
            />
            <error :active="error.type === 'message'" :error="error" />
          </div>
          <div class="w-full flex flex-row justify-end">
            <button
              @click="sendEmail"
              :class="[
                'relative group rounded-full shadow-md active:shadow bg-blue-mid flex flex-row w-32 pl-6 py-1 items-center justify-center',
                'transition-bg transition-400 hover:bg-blue-dark',
                sending === 'stage' ? 'pr-4' : 'pr-12',
                sendError === 'server' ? 'bg-red w-48' : null,
                sendError === 'again' ? 'bg-orange w-40' : null,
                oops ? 'bg-orange' : null,
                send ? 'bg-green' : null
              ]"
            >
              <span
                v-if="sendError === 'server'"
                class="shake text-white md:text-lg font-bold py-1 text-base"
                >Server error!</span
              >
              <span
                v-else-if="sendError === 'again'"
                class="text-white md:text-lg font-bold py-1 text-base"
                >Try again</span
              >
              <span
                v-else-if="sending === 'stage'"
                class="text-white md:text-lg font-bold py-1 text-base"
                >Sending...</span
              >
              <span
                v-else-if="send"
                class="text-white md:text-lg font-bold py-1 text-base"
                >Sent!</span
              >
              <span
                v-else-if="oops"
                class="text-white md:text-lg font-bold py-1 text-base"
                >Oops!</span
              >
              <span
                v-else
                class="text-white md:text-lg font-bold py-1 text-base"
                >Send</span
              >
              <svg
                :class="[
                  'absolute transition-400 right-20px top-11px',
                  sending === 'stage'
                    ? 'transition-none translate-contact-stage opacity-0'
                    : 'transition-opacity-transform',
                  sending
                    ? 'translate-contact-send opacity-0'
                    : 'opacity-100 translate-none'
                ]"
                width="20"
                height="17"
                viewBox="1 6 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.10278 22.8199L21.1685 9.04534C21.7739 8.40338 21.3228 7.35644 20.4404 7.35553L1.45487 7.39118C0.733985 7.38602 0.257467 8.12489 0.538421 8.77694L2.35346 13.0146C2.55131 13.4738 3.06126 13.7223 3.54419 13.5795L17.2687 9.72391L5.03602 17.0418C4.60453 17.304 4.43488 17.8453 4.63274 18.3045L6.46614 22.5342C6.74709 23.1863 7.61141 23.3474 8.10278 22.8199Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center flex-grow-0">
        <ul
          class="lg:pl-24 mt-16 lg:mt-0 pl-0 sm:w-full justify-between md:w-3/4 lg:w-full flex flex-col xs:flex-row xs:flex-wrap lg:block font-normal items-start text-white lg:text-gray sm:text-base md:text-lg space-y-8 xs:space-y-0 lg:space-y-12"
        >
          <li
            v-for="(info, index) in contactInfo"
            :class="[
              'flex-row items-center',
              'w-full xs:w-.5 lg:w-auto',
              info.mobile === false ? 'hidden lg:flex' : 'flex',
              $mq !== 'xl' && index % 0 === 0 ? 'xs:pl-4' : null,
              $mq !== 'xl' && index > 1 ? 'xs:pt-10' : null
            ]"
            :key="`contact_info_${info.icon}`"
          >
            <a
              :href="info.link"
              target="_blank"
              class="group flex items-center h-10 lg:h-12 pl-10 lg:pl-12 relative z-0"
            >
              <div
                class="
                                absolute left-0 top-0 z-0
                                rounded-full bg-white
                                shadow-md group-active:shadow h-full
                                w-10 lg:w-12
                                lg:transition-width lg:transition-400 lg:group-hover:w-full
                                flex items-center justify-start
                            "
              >
                <icons
                  class="
                                    py-3 lg:p-3.5
                                    flex
                                    items-center
                                    justify-center
                                    h-full
                                    w-10
                                    lg:w-12
                                    color-blue-mid
                                    lg:transition-transform lg:transition-400 
                                    lg:group-hover:translate-x-12
                                "
                  :size="info.size || '100%'"
                  :icon="info.icon"
                  :color="$mq === 'xl' ? info.color : '#296AA5'"
                />
              </div>

              <span class="relative z-10 px-4 pr-6">{{ info.content }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <footer-block class="w-full" />
  </section>
</template>

<script>
import error from "~/components/ui/error";
import sectionTitle from "~/components/ui/sectionTitle";
import icons from "~/components/ui/icons";
import footerBlock from "./footer/footer";
export default {
  components: {
    error,
    icons,
    sectionTitle,
    footerBlock
  },
  data() {
    return {
      email: null,
      subject: null,
      message: null,
      send: false,
      sending: false,
      sendError: false,
      oops: false,
      error: {
        trigger: false,
        type: null,
        message: null
      },
      contactInfo: [
        {
          content: "snoohd@gmail.com",
          link: "mailto:snoohd@gmail.com",
          icon: "email",
          mobile: false,
          color: "#f8ba3d"
        },
        {
          content: "Linkedin",
          link: "https://linkedin.com/in/snoo",
          icon: "linkedin",
          size: "90%",
          color: "#0077B5"
        },
        {
          content: "Codesandbox",
          link: "https://codesandbox.io/u/snoohd",
          icon: "codesandbox",
          size: "120%",
          color: "#67b3dc"
        },
        {
          content: "Codepen",
          link: "https://codepen.io/snoo",
          icon: "codepen",
          size: "110%",
          color: "#66676B"
        }
      ]
    };
  },
  watch: {
    email() {
      if (this.error.type === "email") {
        this.error.type = null;
        this.sendError = false;
        this.send = false;
      }
      if (this.send) {
        this.send = false;
      }
    },
    message() {
      if (this.error.type === "message") {
        this.error.type = null;
        this.sendError = false;
      }
      if (this.send) {
        this.send = false;
      }
    }
  },
  computed: {
    checkEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(this.email)) {
        return false;
      }

      return true;
    }
  },
  methods: {
    async sendEmail() {
      if (!this.email) {
        return this.setError("email");
      }

      if (!this.checkEmail) {
        return this.setError("email-wrong");
      }

      if (!this.message) {
        return this.setError("message");
      }

      let subject = this.subject;
      if (!subject) {
        subject = "New job offer";
      }

      this.sendError = false;

      this.sending = true;

      setTimeout(() => {
        if (!this.sendError) {
          this.sending = "stage";
        }
      }, 200);

      //create url
      let sendUrl =
        "https://nativeway.com.uy/send-a-portfolio-email.php?" +
        "subject=" +
        encodeURI(subject) +
        "&" +
        "email=" +
        encodeURI(this.email) +
        "&" +
        "message=" +
        encodeURI(this.message);

      //send email
      let send;
      try {
        send = await this.$axios.$get(sendUrl);
      } catch (e) {
        console.log("server error");
        console.log(e);
      }

      if (send === "sent") {
        setTimeout(() => {
          this.sending = false;
          this.send = true;
        }, 2000);

        setTimeout(() => {
          this.send = false;
          this.subject = null;
          this.message = null;
          this.email = null;
        }, 6000);
      } else {
        this.sendError = "server";
        this.sending = false;

        setTimeout(() => {
          this.sendError = "again";
        }, 3000);
      }
    },
    setError(type) {
      clearTimeout(this.timeout);

      let message = "This field can't be empty.";
      if (type === "email-wrong") {
        message = "Your email seems to be wrong.";
        type = "email";
      }

      this.oops = true;
      this.error.type = type;
      this.error.message = message;
      this.error.trigger = true;

      this.timeout = setTimeout(() => {
        this.oops = false;
        this.error.trigger = false;
      }, 3000);
    }
  }
};
</script>
