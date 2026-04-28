'use client';

import { useState } from 'react';

const sections = [
  { id: 'summary', title: '1. Executive Summary', label: 'Summary' },
  { id: 'audit', title: '2. Current Codebase Audit', label: 'Audit' },
  { id: 'config', title: '3. Recommended site.config.ts', label: 'Config' },
  { id: 'norma', title: '4. Example: Norma Martinez', label: 'Norma Example' },
  { id: 'components', title: '5. Component Refactor', label: 'Components' },
  { id: 'theme', title: '6. Theme Refactor', label: 'Theme' },
  { id: 'assets', title: '7. Asset Structure', label: 'Assets' },
  { id: 'env', title: '8. Environment Variables', label: 'Env Vars' },
  { id: 'repos', title: '9. Repository Strategy', label: 'Repos' },
  { id: 'git', title: '10. Git Strategy', label: 'Git' },
  { id: 'execution', title: '11. Execution Order', label: 'Execution' },
  { id: 'validation', title: '12. Validation', label: 'Validation' },
  { id: 'done', title: '13. Definition of Done', label: 'Done' },
  { id: 'notes', title: '14. Strategic Notes', label: 'Notes' },
];

export default function Blueprint() {
  const [activeSection, setActiveSection] = useState('summary');

  return (
    <div className="flex h-screen bg-white">
      <aside className="w-56 bg-slate-900 text-white overflow-y-auto border-r border-slate-800">
        <div className="sticky top-0 bg-slate-950 px-6 py-6 border-b border-slate-800">
          <h1 className="text-sm font-bold tracking-tight">Real Estate Template</h1>
          <p className="text-xs text-slate-400 mt-1">Blueprint v2.0</p>
        </div>

        <nav className="p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-2.5 rounded text-sm transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-slate-800 p-4 mt-8">
          <p className="text-xs text-slate-500">This blueprint is proprietary and not indexed by search engines.</p>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {activeSection === 'summary' && <SectionSummary />}
          {activeSection === 'audit' && <SectionAudit />}
          {activeSection === 'config' && <SectionConfig />}
          {activeSection === 'norma' && <SectionNorma />}
          {activeSection === 'components' && <SectionComponents />}
          {activeSection === 'theme' && <SectionTheme />}
          {activeSection === 'assets' && <SectionAssets />}
          {activeSection === 'env' && <SectionEnv />}
          {activeSection === 'repos' && <SectionRepos />}
          {activeSection === 'git' && <SectionGit />}
          {activeSection === 'execution' && <SectionExecution />}
          {activeSection === 'validation' && <SectionValidation />}
          {activeSection === 'done' && <SectionDone />}
          {activeSection === 'notes' && <SectionNotes />}
        </div>
      </main>
    </div>
  );
}

function SectionSummary() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Real Estate Website Template Blueprint</h1>
        <p className="text-lg text-slate-600">Config-Driven Multi-Client Architecture — Version 2.0</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Goal</h2>
        <p className="text-slate-700 mb-4">Refactor the existing Reyes Rebollar Properties site into a config-driven Next.js template so any new client (e.g. Norma Martinez) can be onboarded by changing only:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-slate-700">
          <li><code className="bg-slate-100 px-2 py-1 rounded">site.config.ts</code></li>
          <li><code className="bg-slate-100 px-2 py-1 rounded">public/brand/</code></li>
          <li><code className="bg-slate-100 px-2 py-1 rounded">.env.local</code></li>
        </ul>
        <p className="text-slate-700 mt-4">Zero changes to shared components or application logic required.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Current State</h2>
        <p className="text-slate-700">The Reyes Rebollar Properties site is structurally sound and usable as a reusable real estate website template, but it contains identity-specific values across multiple files.</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="font-bold text-blue-900 mb-2">⚠️ Critical Rule</p>
        <p className="text-blue-900">Complete the config-driven refactor on Reyes Rebollar <strong>before</strong> duplicating the repo for Norma Martinez. Cloning while identity values are still hardcoded multiplies cleanup work.</p>
      </div>
    </div>
  );
}

function SectionAudit() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Current Codebase Audit</h1>
      <p className="text-slate-700">A full audit reveals identity-specific values in six files that need refactoring:</p>

      <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm space-y-1">
        <div>components/Header.tsx</div>
        <div>components/Hero.tsx</div>
        <div>components/Footer.tsx</div>
        <div>app/layout.tsx</div>
        <div>app/page.tsx</div>
        <div>app/globals.css</div>
      </div>

      <p className="text-slate-600"><strong>Supabase credentials</strong> are already correctly environment-variable driven and require no changes.</p>

      <div>
        <h3 className="font-bold mb-2">Hardcoded Values by File</h3>
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-bold">components/Header.tsx</p>
            <ul className="list-disc list-inside ml-4 text-slate-700"><li>Logo, company name, subtitle</li></ul>
          </div>
          <div>
            <p className="font-bold">components/Hero.tsx</p>
            <ul className="list-disc list-inside ml-4 text-slate-700"><li>Heading, pillars list, location, image</li></ul>
          </div>
          <div>
            <p className="font-bold">components/Footer.tsx</p>
            <ul className="list-disc list-inside ml-4 text-slate-700"><li>Company name, city, email</li></ul>
          </div>
          <div>
            <p className="font-bold">app/layout.tsx</p>
            <ul className="list-disc list-inside ml-4 text-slate-700"><li>Title, description, theme colors</li></ul>
          </div>
          <div>
            <p className="font-bold">app/page.tsx</p>
            <ul className="list-disc list-inside ml-4 text-slate-700"><li>Copy, origin story, values, quote</li></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionConfig() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Recommended site.config.ts Structure</h1>
      
      <p className="text-slate-700">Create at the project root with all identity-specific values. To onboard a new client, edit only this file, swap assets, and update .env.local.</p>

      <div className="bg-slate-900 text-slate-100 rounded-lg p-6 font-mono text-sm overflow-x-auto">
        <pre className="text-xs">{`export const siteConfig = {
  companyName: "Reyes Rebollar Properties LLC",
  subtitle: "Real Estate Holdings",
  logoPath: "/brand/logo.png",
  heroImagePath: "/brand/hero.jpg",
  email: "reyes@reyesrebollar.com",
  city: "El Cajon, California",
  locationTagline: "Los Limones, Michoacán · El Cajon, California",
  
  pillars: [
    "Residential Holdings",
    "Commercial Properties",
    "El Cajon, California",
    "Family Partnership",
    "Est. 2023",
  ],

  heroDescription: "A family real estate holding company...",
  openingStatement: "From the lime groves of Los Limones...",

  theme: {
    background: "oklch(0.93 0.02 80)",
    foreground: "oklch(0.17 0.025 48)",
    primary: "oklch(0.35 0.055 45)",
    radixAccent: "bronze",
    radixGray: "sand",
  },
} as const;`}</pre>
      </div>
    </div>
  );
}

function SectionNorma() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Example: Norma Martinez Config</h1>
      
      <p className="text-slate-700">When onboarding Norma Martinez as a real estate agent, her config would be different but follow the same structure:</p>

      <div className="bg-slate-900 text-slate-100 rounded-lg p-6 font-mono text-sm overflow-x-auto">
        <pre className="text-xs">{`export const siteConfig = {
  companyName: "Norma Martinez Real Estate",
  subtitle: "Licensed Real Estate Agent",
  email: "norma@normamartinez.com",
  city: "San Diego, California",
  
  pillars: [
    "Residential Sales",
    "First-Time Buyers",
    "20+ Years Experience",
    "DRE #XXXXXXX",
  ],

  theme: {
    background: "oklch(0.96 0.01 240)",
    foreground: "oklch(0.18 0.02 250)",
    primary: "oklch(0.42 0.12 250)",
    radixAccent: "blue",
    radixGray: "slate",
  },
} as const;`}</pre>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <p className="font-bold text-amber-900">Replace all placeholder values with verified branding, DRE number, and copy before production.</p>
      </div>
    </div>
  );
}

function SectionComponents() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Component Refactor Plan</h1>
      
      <p className="text-slate-700">Each component imports siteConfig and replaces hardcoded strings with config values. Layout and classNames remain unchanged.</p>

      <div className="space-y-4">
        <div>
          <p className="font-bold">components/Header.tsx</p>
          <p className="text-sm text-slate-600">Replace logo path, company name, subtitle</p>
        </div>
        <div>
          <p className="font-bold">components/Hero.tsx</p>
          <p className="text-sm text-slate-600">Map siteConfig.pillars array, replace image and copy</p>
        </div>
        <div>
          <p className="font-bold">components/Footer.tsx</p>
          <p className="text-sm text-slate-600">Replace company name, city, email</p>
        </div>
        <div>
          <p className="font-bold">app/layout.tsx</p>
          <p className="text-sm text-slate-600">Wire metadata and Radix theme props to config</p>
        </div>
        <div>
          <p className="font-bold">app/page.tsx</p>
          <p className="text-sm text-slate-600">Pull all homepage copy from config</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="font-bold text-blue-900">No structural changes. Only swap hardcoded values for config imports.</p>
      </div>
    </div>
  );
}

function SectionTheme() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Theme and Color Refactor</h1>
      
      <div>
        <h2 className="text-xl font-bold mb-3">Create ThemeInjector Component</h2>
        <p className="text-slate-700 mb-4">A server component that injects brand colors as CSS variables into &lt;head&gt;, replacing hardcoded values in globals.css.</p>
        
        <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs overflow-x-auto">
          <pre>{`export function ThemeInjector() {
  const t = siteConfig.theme;
  return <style>{\`
    :root {
      --background: \${t.background};
      --foreground: \${t.foreground};
      --primary: \${t.primary};
    }
  \`}</style>;
}`}</pre>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <p className="font-bold text-green-900 mb-2">Key Unlock</p>
        <p className="text-green-900">ThemeInjector allows Norma to have a completely different visual identity without editing any stylesheets.</p>
      </div>
    </div>
  );
}

function SectionAssets() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Asset Folder Structure</h1>
      
      <p className="text-slate-700">Each deployment maintains its own /public/brand/ folder with consistent filenames.</p>

      <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm space-y-1">
        <div>public/brand/</div>
        <div className="ml-4">logo.png ← 36×36px minimum</div>
        <div className="ml-4">hero.jpg ← landscape image</div>
        <div className="ml-4">og-image.png ← 1200×630px social</div>
        <div className="ml-4">favicon.ico ← tab icon</div>
      </div>

      <p className="text-slate-700 text-sm">Filenames stay constant. Only the <em>contents</em> differ per client.</p>
    </div>
  );
}

function SectionEnv() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Environment Variables Per Deployment</h1>
      
      <p className="text-slate-700 mb-4">Each client gets their own .env.local — never committed to the repo.</p>

      <div>
        <p className="font-bold mb-2">Reyes Rebollar</p>
        <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm space-y-1">
          <div>NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co</div>
          <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...</div>
        </div>
      </div>

      <div>
        <p className="font-bold mb-2">Norma Martinez</p>
        <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm space-y-1">
          <div>NEXT_PUBLIC_SUPABASE_URL=https://yyyy.supabase.co</div>
          <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...</div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="font-bold text-red-900 mb-2">Data Isolation</p>
        <p className="text-red-900">Each client must have their own separate Supabase project. Data must remain fully isolated between deployments.</p>
      </div>
    </div>
  );
}

function SectionRepos() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Repository Strategy</h1>
      
      <div>
        <p className="font-bold mb-2">Option A: Separate Repos (Start here)</p>
        <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm space-y-1 mb-4">
          <div>drkmattr/reyesrebollar/ ← template + config</div>
          <div>drkmattr/normamartinez/ ← cloned + Norma config</div>
        </div>
        <p className="text-sm text-slate-700"><span className="font-bold">Pros:</span> Simple, independent. <span className="font-bold">Cons:</span> Manual updates.</p>
      </div>

      <div>
        <p className="font-bold mb-2">Option B: Monorepo (At 4+ clients)</p>
        <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm space-y-1 mb-4">
          <div>real-estate-template/ ← shared code</div>
          <div className="ml-4">clients/reyesrebollar/</div>
          <div className="ml-4">clients/normamartinez/</div>
        </div>
        <p className="text-sm text-slate-700"><span className="font-bold">Pros:</span> Single codebase update. <span className="font-bold">Cons:</span> More complex.</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="font-bold text-blue-900">Start with separate repos. Migrate to monorepo when you reach 4+ clients.</p>
      </div>
    </div>
  );
}

function SectionGit() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Git Branch and Commit Strategy</h1>
      
      <div>
        <p className="font-bold mb-2">Branch Structure</p>
        <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm space-y-1 mb-4">
          <div>main ← production-ready</div>
          <div>dev ← active development</div>
          <div>feature/* ← new features</div>
        </div>
      </div>

      <div>
        <p className="font-bold mb-2">Work Branch</p>
        <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm">git checkout -b feature/config-refactor</div>
      </div>

      <div>
        <p className="font-bold mb-2">Commit Sequence</p>
        <div className="text-sm space-y-1 text-slate-700">
          <div>feat: add site.config.ts with all identity tokens</div>
          <div>refactor(Header): consume siteConfig</div>
          <div>refactor(Footer): consume siteConfig</div>
          <div>refactor(Hero): consume siteConfig and pillars</div>
          <div>refactor(layout): consume siteConfig metadata and theme</div>
          <div>feat(ThemeInjector): inject CSS variables</div>
          <div>refactor(globals.css): remove hardcoded colors</div>
          <div>refactor(page): consume siteConfig copy</div>
        </div>
      </div>
    </div>
  );
}

function SectionExecution() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Execution Order</h1>
      
      <ol className="space-y-2 list-decimal list-inside text-slate-700">
        <li>Create <code className="bg-slate-100 px-1">site.config.ts</code> with current Reyes Rebollar values</li>
        <li>Refactor Header, Footer, Hero components</li>
        <li>Refactor app/layout.tsx for metadata and theme</li>
        <li>Build ThemeInjector component</li>
        <li>Update globals.css to remove hardcoded colors</li>
        <li>Refactor app/page.tsx for all copy</li>
        <li>Reorganize public/brand/ assets</li>
        <li>Run validation checklist on Reyes Rebollar</li>
        <li>Clone repo for Norma Martinez</li>
        <li>Replace site.config.ts, public/brand/, .env.local</li>
        <li>Run validation checklist on Norma Martinez</li>
        <li>Deploy both</li>
      </ol>
    </div>
  );
}

function SectionValidation() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Validation Checklist</h1>
      
      <div>
        <p className="font-bold mb-2">Functional Checks</p>
        <ul className="space-y-1 text-sm text-slate-700 ml-4">
          <li>☐ Homepage renders with correct company name</li>
          <li>☐ Header shows correct logo from /brand/logo.png</li>
          <li>☐ Hero image loads from siteConfig.heroImagePath</li>
          <li>☐ Hero copy and pillars render from config</li>
          <li>☐ Footer email mailto: link is correct</li>
          <li>☐ Meta title and description are correct</li>
          <li>☐ Theme colors render across all pages</li>
        </ul>
      </div>

      <div>
        <p className="font-bold mb-2">Data Isolation</p>
        <ul className="space-y-1 text-sm text-slate-700 ml-4">
          <li>☐ Tenant portal login works</li>
          <li>☐ Maintenance requests isolate by client</li>
          <li>☐ Norma deployment doesn't show Reyes data</li>
        </ul>
      </div>

      <div className="bg-slate-100 rounded-lg p-4 font-mono text-xs">
        <p className="mb-2">grep -R "Reyes Rebollar" app components</p>
        <p className="text-slate-600">Expected: no results (except site.config.ts)</p>
      </div>
    </div>
  );
}

function SectionDone() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Definition of Done</h1>
      
      <ol className="space-y-2 list-decimal list-inside text-slate-700">
        <li>Developer can onboard a new client by editing only site.config.ts, public/brand/, and .env.local</li>
        <li>Reyes Rebollar site is visually and functionally identical to pre-refactor</li>
        <li>Norma Martinez deployment runs from the same codebase</li>
        <li>Both deployments pass validation checklist</li>
        <li>Client data is isolated by Supabase project</li>
        <li>npm run build passes with zero errors on both</li>
        <li>Hardcoded identity values exist only in site.config.ts</li>
      </ol>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
        <p className="font-bold text-green-900">Success Criterion: New client onboarding in 15 minutes = template is production-ready</p>
      </div>
    </div>
  );
}

function SectionNotes() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Strategic Notes</h1>
      
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <p className="font-bold text-blue-900">Complete refactor on Reyes before Norma</p>
          <p className="text-sm text-blue-900">Duplicating while hardcoded values exist doubles cleanup work.</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <p className="font-bold text-purple-900">ThemeInjector is the key unlock</p>
          <p className="text-sm text-purple-900">Allows completely different visual identity without touching stylesheets.</p>
        </div>

        <div className="border-l-4 border-amber-500 pl-4">
          <p className="font-bold text-amber-900">app/page.tsx is most content-heavy</p>
          <p className="text-sm text-amber-900">All copy must move to config for true client-agnosticism.</p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <p className="font-bold text-green-900">Supabase is already clean</p>
          <p className="text-sm text-green-900">Just separate projects + .env.local per client.</p>
        </div>

        <div className="border-l-4 border-orange-500 pl-4">
          <p className="font-bold text-orange-900">Separate repos first, monorepo later</p>
          <p className="text-sm text-orange-900">At 2 clients, overhead isn't worth it. Revisit at 4+.</p>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-4 mt-6 text-xs text-slate-600">
        <p><strong>Version 2.0 — April 2026</strong></p>
        <p>Stack: Next.js 15 · Tailwind CSS · Radix UI · Supabase</p>
      </div>
    </div>
  );
}
