
  var typed = new Typed('#element', {
    strings: ['Vikram', 'Full Stack Developer'],
    typeSpeed: 80,
    loop: true
  });

  anime({
    targets: '.social-icons .ic',
    translateX: {
      value: 260,
      duration: 800
    },
    rotate: {
      value: 360,
      duration: 1800,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 1,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay: 250 // All properties except 'scale' inherit 250ms delay
  });

  anime({
    targets: '.dir-normal',
    translateX: 250,
    easing: 'easeInOutSine'
  });
  
  anime({
    targets: '.dir-reverse',
    translateX: 250,
    direction: 'reverse',
    easing: 'easeInOutSine'
  });
  
  anime({
    targets: '.dir-alternate',
    translateX: 250,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });

 