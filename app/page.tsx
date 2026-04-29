'use client';

import { useState } from 'react';

const sections = [
  { id: 'overview', title: '1. What Is Propframe', label: 'Overview' },
  { id: 'architecture', title: '2. Architecture Overview', label: 'Architecture' },
  { id: 'repos', title: '3. Repository & Domain Setup', label: 'Repos & Domains' },
  { id: 'sections', title: '4. The Section Composition System', label: 'Sections' },
  { id: 'config', title: '5. site.config.ts Reference', label: 'Config' },
  { id: 'norma', title: '6. Example: Norma Martinez', label: 'Norma Config' },
  { id: 'assets', title: '7. Asset Folder Structure', label: 'Assets' },
  { id: 'env', title: '8. Environment Variables', label: 'Env Vars' },
  { id: 'deploy', title: '9. Cloudflare Pages Steps', label: 'Deployment' },
  { id: 'onboard', title: '10. New Client Onboarding', label: 'Onboarding' },
  { id: 'validation', title: '11. Validation Commands', label: 'Validation' },
  { id: 'done', title: '12. Definition of Done', label: 'Done' },
];

export default function Blueprint() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex h-screen bg-white">
      <aside className="w-56 bg-slate-900 text-white overflow-y-auto border-r border-slate-800">
        <div className="sticky top-0 bg-slate-950 px-6 py-6 border-b border-slate-800">
          <h1 className="text-sm font-bold tracking-tight">Propframe</h1>
          <p className="text-xs text-slate-400 mt-1">v3.0 — Live</p>
          <p className="text-xs text-green-400 mt-2 font-bold">✓ Complete</p>
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
          <p className="text-xs text-slate-500">Config-driven real estate template. Proprietary — not indexed.</p>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {activeSection === 'overview' && <SectionOverview />}
          {activeSection === 'architecture' && <SectionArchitecture />}
          {activeSection === 'repos' && <SectionRepos />}
          {activeSection === 'sections' && <SectionSections />}
          {activeSection === 'config' && <SectionConfig />}
          {activeSection === 'norma' && <SectionNorma />}
          {activeSection === 'assets' && <SectionAssets />}
          {activeSection === 'env' && <SectionEnv />}
          {activeSection === 'deploy' && <SectionDeploy />}
          {activeSection === 'onboard' && <SectionOnboard />}
          {activeSection === 'validation' && <SectionValidation />}
          {activeSection === 'done' && <SectionDone />}
        </div>
      </main>
    </div>
  );
}

function SectionOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Propframe</h1>
        <p className="text-lg text-slate-600">Config-Driven Real Estate Website Template</p>
        <p className="text-sm text-green-600 font-bold mt-2">✓ v3.0 — Implementation Complete</p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <p className="font-bold text-green-900 mb-3">Live Deployments</p>
        <div className="space-y-2 text-sm text-green-900 font-mono">
          <div><span className="font-bold">Reyes Rebollar:</span> reyesrebollar.com</div>
          <div><span className="font-bold">Norma Martinez:</span> propertiesbynorma.com</div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What Is Propframe</h2>
        <p className="text-slate-700 mb-4">
          A config-driven real estate website template where each client shares 100% of the same codebase but has a completely independent public-facing site.
        </p>
        <p className="text-slate-700"><strong>Stack:</strong> Next.js 15 · Tailwind CSS · Radix UI · Supabase · Cloudflare Pages</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Promise</h2>
        <p className="text-slate-700 mb-3">Onboarding a new client requires changing only:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-slate-700">
          <li><code className="bg-slate-100 px-2 py-1 rounded">site.config.ts</code></li>
          <li><code className="bg-slate-100 px-2 py-1 rounded">public/brand/</code></li>
          <li><code className="bg-slate-100 px-2 py-1 rounded">.env.local</code></li>
        </ul>
      </div>
    </div>
  );
}

function SectionArchitecture() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Architecture Overview</h1>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-bold mb-2">What Changes Per Client</h3>
          <ul className="space-y-1 text-sm text-slate-700 ml-4">
            <li>• <code className="bg-slate-100 px-1">site.config.ts</code> — all identity, copy, theme, sections</li>
            <li>• <code className="bg-slate-100 px-1">public/brand/</code> — logo, images, favicon</li>
            <li>• <code className="bg-slate-100 px-1">.env.local</code> — Supabase credentials</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">What Stays Shared</h3>
          <ul className="space-y-1 text-sm text-slate-700 ml-4">
            <li>• <code className="bg-slate-100 px-1">components/</code> — all UI + section library</li>
            <li>• <code className="bg-slate-100 px-1">app/</code> — pages + portals</li>
            <li>• <code className="bg-slate-100 px-1">lib/</code> — Supabase client</li>
            <li>• <code className="bg-slate-100 px-1">app/globals.css</code> — structural styles</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Key Decisions</h3>
          <div className="space-y-3 text-sm">
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-bold">ThemeInjector</p>
              <p className="text-slate-600">Injects brand colors from config into &lt;head&gt;</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-bold">Section Composition</p>
              <p className="text-slate-600">Homepage dynamically renders sections from config</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-bold">Supabase Isolation</p>
              <p className="text-slate-600">Each client has separate project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionRepos() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Repository & Domain Setup</h1>
      
      <div>
        <h3 className="font-bold mb-2">GitHub</h3>
        <div className="bg-slate-100 rounded p-3 font-mono text-sm space-y-1">
          <div>drkmattr/propframe</div>
          <div>drkmattr/normamartinez</div>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-2">Cloudflare Pages — Dual Domains</h3>
        <div className="bg-slate-100 rounded p-3 font-mono text-sm space-y-1">
          <div>reyesrebollar.propframe.drkm.io → reyesrebollar.com</div>
          <div>norma.propframe.drkm.io → propertiesbynorma.com</div>
        </div>
        <p className="text-xs text-slate-600 mt-2">Each client reachable on both internal and custom domains</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded p-4">
        <p className="text-sm font-bold text-blue-900">Separate repos per client now. Monorepo at 4+ clients.</p>
      </div>
    </div>
  );
}

function SectionSections() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Section Composition System</h1>
      
      <p className="text-slate-700 text-sm">Homepage is a dynamic renderer. Clients choose sections via config.</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-100 p-3 rounded text-sm">
          <p className="font-bold">Reyes Rebollar</p>
          <div className="font-mono text-xs mt-2 space-y-1">
            <div>hero</div>
            <div>opening-statement</div>
            <div>origin-story</div>
            <div>holdings</div>
            <div>closing-quote</div>
          </div>
        </div>
        <div className="bg-blue-50 p-3 rounded text-sm">
          <p className="font-bold">Norma Martinez</p>
          <div className="font-mono text-xs mt-2 space-y-1">
            <div>hero</div>
            <div>opening-statement</div>
            <div>team</div>
            <div>testimonials</div>
            <div>holdings</div>
            <div>contact-cta</div>
          </div>
        </div>
      </div>

      <div className="text-sm space-y-2">
        <p className="font-bold">Available sections:</p>
        <div className="grid grid-cols-4 gap-2">
          {['hero', 'opening-statement', 'origin-story', 'holdings', 'team', 'testimonials', 'contact-cta', 'closing-quote'].map(s => (
            <div key={s} className="bg-slate-100 px-2 py-1 rounded text-xs">{s}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionConfig() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">site.config.ts</h1>
      <p className="text-slate-700 text-sm">Entire client identity, copy, theme, sections in one file.</p>
      <div className="bg-slate-900 text-slate-100 rounded p-4 font-mono text-xs overflow-auto max-h-96">
        <pre>{`companyName
subtitle
logoPath, heroImagePath
email, city
pillars (array)
heroDescription
openingStatement
originSectionLabel, heading, paragraphs
values (array)
team (array)
testimonials (array)
contactCTA
sections (array — controls homepage)
metaTitle, metaDescription
theme (OKLCH colors)
  background, foreground, primary
  secondary, muted, accent, border
  radixAccent, radixGray`}</pre>
      </div>
    </div>
  );
}

function SectionNorma() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">Example: Norma Martinez</h1>
      <p className="text-sm text-green-600 font-bold">Live: propertiesbynorma.com</p>
      <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm mt-4">
        <p className="font-bold mb-2">Key differences from Reyes:</p>
        <ul className="space-y-1 text-xs ml-4">
          <li>• Theme: Blue palette (vs earth tones)</li>
          <li>• Sections: includes team + testimonials</li>
          <li>• Copy: "Licensed Agent" positioning (vs holding company)</li>
          <li>• Contact: agent booking CTA</li>
        </ul>
      </div>
    </div>
  );
}

function SectionAssets() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">Asset Folder Structure</h1>
      <div className="bg-slate-100 rounded p-3 font-mono text-sm space-y-1">
        <div>public/brand/</div>
        <div className="ml-4">logo.png (36×36px)</div>
        <div className="ml-4">hero.jpg (landscape)</div>
        <div className="ml-4">og-image.png (1200×630px)</div>
        <div className="ml-4">favicon.ico</div>
        <div className="ml-4">team/ (agent photos)</div>
      </div>
    </div>
  );
}

function SectionEnv() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">Environment Variables</h1>
      <div className="bg-slate-100 rounded p-3 font-mono text-sm space-y-1 mb-4">
        <div>NEXT_PUBLIC_SUPABASE_URL</div>
        <div>NEXT_PUBLIC_SUPABASE_ANON_KEY</div>
        <div>SUPABASE_SERVICE_ROLE_KEY</div>
      </div>
      <p className="text-xs text-slate-600">Never commit .env.local. Each client has separate Supabase project.</p>
    </div>
  );
}

function SectionDeploy() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">Cloudflare Pages Deployment</h1>
      <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
        <li>Push repo to GitHub</li>
        <li>Create Pages project, connect repo</li>
        <li>Build: <code className="bg-slate-100 px-1">npm run build</code></li>
        <li>Output: <code className="bg-slate-100 px-1">.next</code></li>
        <li>Add env vars from .env.local</li>
        <li>Add custom domains (internal + public)</li>
        <li>Run asset setup commands</li>
      </ol>
    </div>
  );
}

function SectionOnboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">Client Onboarding Checklist</h1>
      <div className="space-y-2 text-sm">
        {[
          'Clone propframe repo',
          'Fill in site.config.ts',
          'Add public/brand/ assets',
          'Create new Supabase project',
          'Create .env.local',
          'Create Cloudflare Pages project',
          'Add both custom domains',
          'Verify: no hardcoded client names',
          'Verify: npm run build passes',
        ].map((item) => (
          <div key={item} className="flex items-start">
            <span className="mr-3">☐</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionValidation() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">Validation Commands</h1>
      <div className="space-y-3">
        <div>
          <p className="font-bold text-sm mb-1">No hardcoded client strings</p>
          <div className="bg-slate-900 text-slate-100 rounded p-2 font-mono text-xs">grep -R "CompanyName" app components</div>
        </div>
        <div>
          <p className="font-bold text-sm mb-1">Build passes</p>
          <div className="bg-slate-900 text-slate-100 rounded p-2 font-mono text-xs">npm run build</div>
        </div>
        <div>
          <p className="font-bold text-sm mb-1">Portal login works</p>
          <p className="text-xs text-slate-600">Test tenant + manager access</p>
        </div>
        <div>
          <p className="font-bold text-sm mb-1">Data isolation</p>
          <p className="text-xs text-slate-600">Verify Norma data ≠ Reyes data</p>
        </div>
      </div>
    </div>
  );
}

function SectionDone() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Definition of Done</h1>
      
      <ol className="space-y-2 list-decimal list-inside text-sm text-slate-700">
        <li>Only site.config.ts, public/brand/, and .env.local were changed</li>
        <li>No component or page files modified for client content</li>
        <li>Grep checks return zero hardcoded client names</li>
        <li>npm run build passes with zero errors</li>
        <li>Public site renders with correct branding and sections</li>
        <li>Tenant + manager portals are functional</li>
        <li>Supabase data is isolated from other clients</li>
        <li>Both custom domains resolve on Cloudflare</li>
      </ol>

      <div className="bg-green-50 border border-green-200 rounded p-6 mt-8">
        <p className="font-bold text-green-900">Status: Complete ✓</p>
        <p className="text-sm text-green-900 mt-2">Both Reyes Rebollar and Norma Martinez are live and using the Propframe template.</p>
      </div>
    </div>
  );
}
