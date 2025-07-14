// src/data/ExposeData.js
export const exposeData = [
  {
    id: 'congo-exploitation',
    title: 'CONGO: THE BLOOD MINERALS CONSPIRACY',
    category: 'Resource Exploitation',
    date: '2024-01-15',
    location: 'Democratic Republic of Congo',
    severity: 'Critical',
    tags: ['Mining', 'Child Labor', 'Corporate Crimes', 'Imperialism'],
    shortDescription: 'Western corporations systematically exploit Congolese cobalt mines using child labor while tech giants profit from this modern slavery.',
    preview: `The Democratic Republic of Congo produces over 60% of the world's cobalt, a critical mineral for smartphones and electric vehicles. Yet behind this lucrative industry lies a dark reality of systematic exploitation orchestrated by Western corporations.

    Children as young as 6 years old work in dangerous mines, extracting cobalt with their bare hands for less than $2 per day. Meanwhile, tech giants like Apple, Tesla, and Samsung generate billions in profit from these blood minerals.

    This isn't just corporate negligence—it's a deliberate system of neo-colonial exploitation that keeps Congo impoverished while enriching Western capitalists...`,
    fullContent: `
      <div class="space-y-8">
        <div class="revolutionary-card p-8 rounded-lg">
          <h1 class="text-4xl font-black revolutionary-text mb-6">THE BLOOD MINERALS CONSPIRACY</h1>
          <div class="text-lg leading-relaxed space-y-6">
            <p>The Democratic Republic of Congo produces over <span class="bg-revolutionary-red-600 text-white px-2 py-1 font-bold">60% of the world's cobalt</span>, a critical mineral for smartphones and electric vehicles. Yet behind this lucrative industry lies a dark reality of systematic exploitation orchestrated by Western corporations.</p>
            
            <p>Children as young as <span class="bg-revolutionary-red-600 text-white px-2 py-1 font-bold">6 years old</span> work in dangerous mines, extracting cobalt with their bare hands for less than <span class="bg-revolutionary-red-600 text-white px-2 py-1 font-bold">$2 per day</span>. Meanwhile, tech giants like Apple, Tesla, and Samsung generate billions in profit from these blood minerals.</p>
            
            <p>This isn't just corporate negligence—it's a <span class="bg-revolutionary-red-600 text-white px-2 py-1 font-bold">deliberate system of neo-colonial exploitation</span> that keeps Congo impoverished while enriching Western capitalists.</p>
          </div>
        </div>

        <div class="revolutionary-card p-8 rounded-lg">
          <h2 class="text-3xl font-black revolutionary-text mb-4">THE CAPITALIST CRIME NETWORK</h2>
          <div class="text-lg leading-relaxed space-y-4">
            <p>Major Western corporations involved in this exploitation include:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li><span class="font-bold text-revolutionary-red-400">Apple Inc.</span> - Uses Congolese cobalt in iPhone batteries while maintaining "ethical sourcing" facade</li>
              <li><span class="font-bold text-revolutionary-red-400">Tesla</span> - Elon Musk's "sustainable" cars built on child labor</li>
              <li><span class="font-bold text-revolutionary-red-400">Samsung</span> - South Korean tech giant profiting from African suffering</li>
              <li><span class="font-bold text-revolutionary-red-400">Glencore</span> - Swiss mining corporation directly operating exploitation sites</li>
            </ul>
          </div>
        </div>

        <div class="revolutionary-card p-8 rounded-lg">
          <h2 class="text-3xl font-black revolutionary-text mb-4">THE HUMAN COST</h2>
          <div class="text-lg leading-relaxed space-y-4">
            <p>The impact of this capitalist exploitation is devastating:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div class="bg-revolutionary-red-900/30 p-4 rounded border-l-4 border-revolutionary-red-600">
                <h3 class="font-bold text-revolutionary-red-400 mb-2">Child Labor Statistics</h3>
                <p><span class="font-bold">40,000+</span> children working in cobalt mines</p>
                <p><span class="font-bold">6 years old</span> - youngest documented workers</p>
                <p><span class="font-bold">12-14 hours</span> daily work shifts</p>
              </div>
              <div class="bg-revolutionary-red-900/30 p-4 rounded border-l-4 border-revolutionary-red-600">
                <h3 class="font-bold text-revolutionary-red-400 mb-2">Health Impacts</h3>
                <p><span class="font-bold">Respiratory diseases</span> from dust exposure</p>
                <p><span class="font-bold">Skin infections</span> from toxic chemicals</p>
                <p><span class="font-bold">Stunted growth</span> in children</p>
              </div>
            </div>
          </div>
        </div>

        <div class="revolutionary-card p-8 rounded-lg">
          <h2 class="text-3xl font-black revolutionary-text mb-4">THE SOCIALIST SOLUTION</h2>
          <div class="text-lg leading-relaxed space-y-4">
            <p>Only through <span class="bg-revolutionary-red-600 text-white px-2 py-1 font-bold">collective action</span> and <span class="bg-revolutionary-red-600 text-white px-2 py-1 font-bold">workers' solidarity</span> can we end this exploitation:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Nationalize Congo's mineral resources under workers' control</li>
              <li>Establish international boycotts of blood mineral products</li>
              <li>Support Congolese workers' unions and liberation movements</li>
              <li>Demand reparations from exploitative corporations</li>
            </ul>
          </div>
        </div>

        <div class="revolutionary-card p-8 rounded-lg bg-revolutionary-red-900/20">
          <h2 class="text-3xl font-black revolutionary-text mb-4">SOURCES & EVIDENCE</h2>
          <div class="text-sm space-y-2">
            <p><strong>• Amnesty International:</strong> "This is What We Die For: Human Rights Abuses in the Democratic Republic of the Congo Power the Global Trade in Cobalt"</p>
            <p><strong>• Washington Post:</strong> "The cobalt pipeline: Tracing the path from deadly hand-dug mines in Congo to consumers' phones and laptops"</p>
            <p><strong>• Guardian:</strong> "Apple and Google named in US lawsuit over Congolese child cobalt mining deaths"</p>
            <p><strong>• Reuters:</strong> "Tesla suppliers linked to child labor in Congo cobalt mines"</p>
          </div>
        </div>
      </div>
    `,
    images: [
      '/images/congo-mines.jpg',
      '/images/child-miners.jpg',
      '/images/cobalt-extraction.jpg'
    ],
    relatedCases: ['lithium-bolivia', 'oil-venezuela', 'rare-earth-africa']
  }
];

export const getExposeById = (id) => {
  return exposeData.find(item => item.id === id);
};

export const getExposeByCategory = (category) => {
  return exposeData.filter(item => item.category === category);
};

export const getAllCategories = () => {
  return [...new Set(exposeData.map(item => item.category))];
};