export default {
  name: 'intersection',
  mounted(el, binding) {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleIntersect = (...args) => {
      if (args[0][0].isIntersecting) {
        binding.value();
      }
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(el);
  },
};
