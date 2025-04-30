import { createApp } from 'vue';
import SpinnerVue from '@/components/SpinnerVue.vue';

function goToTopSmoothly() {
  return new Promise((resolve) => {
    // Show spinner
    const spinner = document.createElement('div');
    spinner.id = 'scroll-spinner';
    document.body.appendChild(spinner);

    // Mount the SpinnerVue component
    const app = createApp(SpinnerVue);
    app.mount('#scroll-spinner');

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Remove spinner and resolve after animation
    setTimeout(() => {
      app.unmount();
      document.body.removeChild(spinner);
      resolve();
    }, 1000);
  });
}

function range(start, end = null) {
  if (end === null) {
    end = start
    start = 0
  }
  return Array(end - start).fill().map((_, idx) => start + idx)
}

export { goToTopSmoothly, range };
