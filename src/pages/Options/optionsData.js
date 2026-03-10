export const optionFilters = [
  { id: 'all', label: 'All Solutions' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'industrial', label: 'Industrial' },
];

export const optionSolutions = [
  {
    id: 1,
    icon: 'Sun',
    title: 'Solar Panel Systems',
    description:
      'High-efficiency photovoltaic panels for homes and businesses. Generate clean energy and reduce electricity bills.',
    categories: ['residential', 'commercial'],
  },
  {
    id: 2,
    icon: 'Wind',
    title: 'Wind Turbines',
    description:
      'Advanced wind energy solutions for various scales. Harness wind power for sustainable electricity generation.',
    categories: ['commercial', 'industrial'],
  },
  {
    id: 3,
    icon: 'Droplets',
    title: 'Hydroelectric Systems',
    description:
      'Small-scale hydroelectric power systems. Convert water flow into renewable energy for continuous power.',
    categories: ['commercial', 'industrial'],
  },
  {
    id: 4,
    icon: 'Flame',
    title: 'Biomass Energy',
    description:
      'Convert organic materials into clean energy. Sustainable waste-to-energy solutions for businesses.',
    categories: ['commercial', 'industrial'],
  },
  {
    id: 5,
    icon: 'Battery',
    title: 'Energy Storage',
    description:
      'Advanced battery systems for storing renewable energy. Maximize efficiency and ensure 24/7 power availability.',
    categories: ['residential', 'commercial', 'industrial'],
  },
  {
    id: 6,
    icon: 'Zap',
    title: 'Hybrid Systems',
    description:
      'Combine multiple renewable sources for optimal efficiency. Customized energy solutions for unique needs.',
    categories: ['residential', 'commercial'],
  },
  {
    id: 7,
    icon: 'Leaf',
    title: 'Geothermal Heat Pumps',
    description:
      "Efficient heating and cooling using earth's natural temperature. Reduce HVAC costs year-round.",
    categories: ['residential', 'commercial'],
  },
  {
    id: 8,
    icon: 'House',
    title: 'Smart Home Integration',
    description:
      'Intelligent energy management systems. Monitor and optimize your renewable energy consumption in real-time.',
    categories: ['residential'],
  },
];
