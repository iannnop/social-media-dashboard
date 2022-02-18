module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'youtube': 'hsl(348, 97%, 39%)',
        'dark-card': 'hsl(228, 28%, 20%)',
        'light-card': 'hsl(227, 47%, 96%)',
        'light-title': 'hsl(230, 17%, 14%)',
        'dark-title': 'white',
        'light-paragraph': 'hsl(228, 12%, 44%)',
        'dark-paragraph': 'hsl(228, 34%, 66%)',
        'dark-topbg': 'hsl(232, 19%, 15%)',
        'light-topbg': 'hsl(225, 100%, 98%)',
        'dark-bg': 'hsl(230, 17%, 14%)',
        'primary-limegreen': 'hsl(163, 72%, 41%)',
        'primary-brightred': 'hsl(356, 69%, 56%)',
        'toggle': 'hsl(230, 22%, 74%)'
      },
      backgroundImage: {
        'split-color': 'linear-gradient(to bottom, hsl(225, 100%, 98%) 50%, white 50%)',
        'instagram': 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        'dark-split-color': 'linear-gradient(to bottom, hsl(232, 19%, 15%) 50%, hsl(230, 17%, 14%) 50%)',
      },
    },
  },
  plugins: [],
}
