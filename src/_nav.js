export default {
  items: [
    {
      name: 'FinPer',
      url: '/dashboard',
      icon: 'icon-wallet',
      
    },
    {
      title: true,
      name: 'Cuentas',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Galicia dolares',
      url: '/theme/colors',
      icon: 'icon-credit-card',
      children: [
        {
          name: 'USD$300',
          url: '/icons/coreui-icons',
        }
      ]
    },
    {
      name: 'Galicia pesos',
      url: '/theme/typography',
      icon: 'icon-credit-card',
      children: [
        {
          name: 'ARS$30.000',
          url: '/icons/coreui-icons',
        }
      ]
    },
    {
      title: true,
      name: 'Reportes',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    
    
    {
      name: 'Graficos',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
      
    {
      name: 'Estimaciones',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
  
  ],
};
