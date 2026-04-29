'use client';

import { useState } from 'react';

const sections = [
  { id: 'overview', title: '1. Overview', label: 'Overview' },
  { id: 'multitenant', title: '2. Multi-Tenant Architecture', label: 'Multi-Tenant' },
  { id: 'database', title: '3. Database Schema', label: 'Database' },
  { id: 'auth', title: '4. Manager Auth Flow v4.0', label: 'Auth' },
  { id: 'config', title: '5. Client Configuration', label: 'Config' },
  { id: 'sections', title: '6. Section Composition', label: 'Sections' },
  { id: 'files', title: '7. Key Files', label: 'Files' },
  { id: 'bugs', title: '8. Critical Bug Fixes', label: 'Bugs' },
  { id: 'deploy', title: '9. Cloudflare Deployment', label: 'Deploy' },
  { id: 'onboard', title: '10. New Client Onboarding', label: 'Onboard' },
  { id: 'validation', title: '11. Validation Checklist', label: 'Validate' },
  { id: 'phase2', title: '12. Phase 2 Roadmap', label: 'Phase 2' },
];

export default function Blueprint() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex h-screen bg-white">
      <aside className="w-56 bg-slate-900 text-white overflow-y-auto border-r border-slate-800">
        <div className="sticky top-0 bg-slate-950 px-6 py-6 border-b border-slate-800">
          <h1 className="text-sm font-bold tracking-tight">Propframe</h1>
          <p className="text-xs text-red-400 mt-1 font-bold">v4.0 — Multi-Tenant</p>
          <p className="text-xs text-yellow-400 mt-2">⚠ In Progress</p>
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
          <p className="text-xs text-slate-400">One database, many clients. RLS-enforced isolation.</p>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {activeSection === 'overview' && <SectionOverview />}
          {activeSection === 'multitenant' && <SectionMultiTenant />}
          {activeSection === 'database' && <SectionDatabase />}
          {activeSection === 'auth' && <SectionAuth />}
          {activeSection === 'config' && <SectionConfig />}
          {activeSection === 'sections' && <SectionSections />}
          {activeSection === 'files' && <SectionFiles />}
          {activeSection === 'bugs' && <SectionBugs />}
          {activeSection === 'deploy' && <SectionDeploy />}
          {activeSection === 'onboard' && <SectionOnboard />}
          {activeSection === 'validation' && <SectionValidation />}
          {activeSection === 'phase2' && <SectionPhase2 />}
        </div>
      </main>
    </div>
  );
}

function SectionOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Propframe v4.0</h1>
        <p className="text-lg text-slate-600">Multi-Tenant Real Estate Platform</p>
        <p className="text-sm text-yellow-600 font-bold mt-2">⚠ Architecture shift in progress</p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="font-bold text-yellow-900 mb-2">Key Shift from v3.0</p>
        <p className="text-sm text-yellow-900 mb-3">
          One shared Supabase database for all clients, with Row Level Security (RLS) enforcing company isolation.
        </p>
        <ul className="text-sm text-yellow-900 space-y-1 list-disc list-inside ml-2">
          <li>Single database → easier ops, one backup, one schema</li>
          <li>Per-client Cloudflare deployment → separate frontend per client</li>
          <li>Company isolation via RLS → no data leakage</li>
          <li>Critical bugs identified → send-notice-email, send-portal-invite need fixes</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">Architecture at a Glance</h2>
        <table className="text-sm w-full">
          <tbody className="space-y-2">
            <tr><td className="font-bold">Database:</td><td>1 shared Supabase project, all companies</td></tr>
            <tr><td className="font-bold">Frontend:</td><td>1 Cloudflare Pages per client</td></tr>
            <tr><td className="font-bold">Isolation:</td><td>RLS policies on every table</td></tr>
            <tr><td className="font-bold">Identity:</td><td>NEXT_PUBLIC_COMPANY_ID (env var)</td></tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">Live Deployments</h2>
        <div className="space-y-2 text-sm">
          <div><span className="font-bold">Reyes Rebollar:</span> reyesrebollar.com</div>
          <div><span className="font-bold">Norma Martinez:</span> propertiesbynorma.com</div>
        </div>
      </div>
    </div>
  );
}

function SectionMultiTenant() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Multi-Tenant Architecture</h1>
      
      <div>
        <h2 className="text-xl font-bold mb-3">Core Principle</h2>
        <p className="text-slate-700 text-sm mb-4">
          Every company-owned table has a <code className="bg-slate-100 px-1">company_id</code> column. Row Level Security (RLS) policies enforce that users only see rows belonging to companies they are members of.
        </p>
        <p className="text-slate-700 text-sm">
          The frontend reads its company identity from <code className="bg-slate-100 px-1">NEXT_PUBLIC_COMPANY_ID</code> environment variable, set in each Cloudflare Pages deployment.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Platform Tables (New)</h2>
        <div className="bg-slate-100 rounded p-4 font-mono text-xs space-y-3">
          <div>
            <div className="font-bold">companies</div>
            <div className="text-slate-600 ml-2">id, name, slug, status, created_at, updated_at</div>
          </div>
          <div>
            <div className="font-bold">company_members</div>
            <div className="text-slate-600 ml-2">id, user_id, company_id, role (owner|admin|manager|viewer),</div>
            <div className="text-slate-600 ml-2">status (active|invited|suspended), created_at, updated_at</div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">RLS Helper Functions</h2>
        <div className="bg-slate-900 text-slate-100 rounded p-4 font-mono text-xs space-y-2">
          <div>user_company_ids() — returns UUIDs of user's companies</div>
          <div>user_has_company_role() — checks role + status</div>
          <div>user_tenant_ids() — (Phase 2) for tenant portal auth</div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm">
        <p className="font-bold text-blue-900 mb-2">Migration File</p>
        <p className="text-blue-900 text-xs font-mono">supabase/migrations/20260428000000_multitenant_foundation.sql</p>
        <p className="text-xs text-blue-900 mt-2">10-step migration covering table creation, RLS policies, backfill, and helper functions.</p>
      </div>
    </div>
  );
}

function SectionDatabase() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Database Schema</h1>
      
      <div>
        <h2 className="text-xl font-bold mb-3">All Company-Scoped Tables</h2>
        <p className="text-slate-700 text-sm mb-3">Each has a <code className="bg-slate-100 px-1">company_id</code> column enforced by RLS:</p>
        <div className="grid grid-cols-3 gap-2">
          {['properties', 'units', 'tenants', 'leases', 'invoices', 'payments', 'maintenance_requests', 'notices', 'documents'].map(table => (
            <div key={table} className="bg-slate-100 px-3 py-2 rounded text-sm font-mono">
              {table}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Migration Steps (10)</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
          <li>Create <code className="bg-slate-100 px-1">companies</code> table</li>
          <li>Insert Reyes Rebollar seed row</li>
          <li>Create <code className="bg-slate-100 px-1">company_members</code> table</li>
          <li>Add nullable <code className="bg-slate-100 px-1">company_id</code> to all 9 domain tables</li>
          <li>Backfill <code className="bg-slate-100 px-1">company_id</code> for existing rows</li>
          <li>Set <code className="bg-slate-100 px-1">company_id</code> NOT NULL</li>
          <li>Add indexes on <code className="bg-slate-100 px-1">company_id</code></li>
          <li>Create RLS helper functions</li>
          <li>Enable RLS + CRUD policies on all tables</li>
          <li>Link existing manager account to company_members</li>
        </ol>
      </div>
    </div>
  );
}

function SectionAuth() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Manager Auth Flow v4.0</h1>
      
      <p className="text-slate-700 text-sm mb-4">
        Old email-domain check (<code className="bg-slate-100 px-1">@reyesrebollar.com</code>) replaced by <code className="bg-slate-100 px-1">company_members</code> table lookup. Company-agnostic and enforced at app + RLS layers.
      </p>

      <div>
        <h2 className="text-xl font-bold mb-3">Sign-In Flow</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
          <li>User signs in with Supabase Auth (email + password)</li>
          <li>App queries <code className="bg-slate-100 px-1">company_members</code> where user + company match</li>
          <li>If no active record → sign out + error</li>
          <li>If active → redirect to <code className="bg-slate-100 px-1">/manager/dashboard</code></li>
        </ol>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Account Setup</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
          <li>User creates auth via "Set up account" form</li>
          <li>Auth user created in Supabase</li>
          <li>Administrator INSERTs user into <code className="bg-slate-100 px-1">company_members</code></li>
          <li>User can then sign in normally</li>
        </ol>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm">
        <p className="font-bold text-blue-900">Shared Auth Hook</p>
        <p className="text-blue-900 text-xs font-mono">lib/useCompanyAuth.ts</p>
        <p className="text-xs text-blue-900 mt-2">Use in any manager page to enforce session + company_members check.</p>
      </div>
    </div>
  );
}

function SectionConfig() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Client Configuration</h1>
      
      <p className="text-slate-700 text-sm">Same <code className="bg-slate-100 px-1">site.config.ts</code> from v3, plus new company identity:</p>

      <div className="bg-slate-900 text-slate-100 rounded p-4 font-mono text-xs space-y-2">
        <div>export const siteConfig = {'{'}// all v3 fields</div>
        <div className="ml-4">companyName, subtitle, logoPath, heroImagePath,</div>
        <div className="ml-4">email, city, pillars, theme, sections, values,</div>
        <div className="ml-4">team, testimonials, // ... etc</div>
        <div>{'}') as const;</div>
        <div className="mt-2"></div>
        <div>// v4.0 addition:</div>
        <div>export const COMPANY_ID = process.env.NEXT_PUBLIC_COMPANY_ID ?? "";</div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm">
        <p className="font-bold text-blue-900">NEXT_PUBLIC_COMPANY_ID</p>
        <p className="text-xs text-blue-900">Set in Cloudflare Pages environment variables. UUID of the company row in Supabase.</p>
      </div>
    </div>
  );
}

function SectionSections() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Section Composition (unchanged)</h1>
      
      <div className="grid grid-cols-2 gap-3 text-sm">
        {['hero', 'opening-statement', 'origin-story', 'holdings', 'team', 'testimonials', 'contact-cta', 'closing-quote'].map(s => (
          <div key={s} className="bg-slate-100 px-3 py-2 rounded text-xs font-mono">{s}</div>
        ))}
      </div>

      <p className="text-xs text-slate-600 mt-4">Clients control homepage via <code className="bg-slate-100 px-1">siteConfig.sections</code> array.</p>
    </div>
  );
}

function SectionFiles() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Key Files Structure</h1>
      
      <div className="bg-slate-100 rounded p-4 font-mono text-xs space-y-1">
        <div>site.config.ts — client identity + COMPANY_ID</div>
        <div>lib/supabase.ts — Supabase client + types (with company_id)</div>
        <div>lib/useCompanyAuth.ts — manager auth hook (NEW)</div>
        <div>components/ThemeInjector.tsx — unchanged</div>
        <div>components/sections/ — unchanged</div>
        <div>app/manager/login/page.tsx — uses company_members lookup</div>
        <div>app/manager/dashboard/page.tsx — auth guard + COMPANY_ID filter</div>
        <div>supabase/migrations/</div>
        <div className="ml-4">20260428000000_multitenant_foundation.sql</div>
      </div>
    </div>
  );
}

function SectionBugs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Critical Bug Fixes Required</h1>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 className="font-bold text-red-900 mb-3">send-notice-email — CRITICAL</h2>
        <p className="text-sm text-red-900 mb-3">
          When <code className="bg-white px-1">sent_to_type === "all"</code>, queries all tenants with NO company filter.
        </p>
        <p className="text-sm text-red-900 font-bold">Risk: Sends emails to tenants across all companies</p>
        <p className="text-sm text-red-900 mt-3">
          <strong>Fix:</strong> Add <code className="bg-white px-1">.eq("company_id", company_id)</code> to the "all tenants" query. Pass <code className="bg-white px-1">company_id</code> in request body.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h2 className="font-bold text-yellow-900 mb-3">send-portal-invite — Pending</h2>
        <p className="text-sm text-yellow-900 mb-3">
          Hardcodes <code className="bg-white px-1">reyesrebollar.com</code> in redirect URL and branding colors.
        </p>
        <p className="text-sm text-yellow-900">
          <strong>Fix:</strong> Receive redirect URL and branding config from calling client. Use <code className="bg-white px-1">siteConfig.siteUrl</code>.
        </p>
      </div>
    </div>
  );
}

function SectionDeploy() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Cloudflare Pages Deployment</h1>
      
      <div>
        <h2 className="text-xl font-bold mb-3">Environment Variables</h2>
        <div className="bg-slate-100 rounded p-3 font-mono text-xs space-y-1">
          <div>NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co</div>
          <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...</div>
          <div className="text-green-700 font-bold">NEXT_PUBLIC_COMPANY_ID=&lt;UUID&gt; ← NEW</div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 mt-4">Build Settings</h2>
        <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
          <li>Build: <code className="bg-slate-100 px-1">npm run build</code></li>
          <li>Output: <code className="bg-slate-100 px-1">.next</code></li>
          <li>Node: 20</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 mt-4">Custom Domains</h2>
        <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside ml-2">
          <li>Internal: <code className="bg-slate-100 px-1">reyesrebollar.propframe.drkm.io</code></li>
          <li>Public: <code className="bg-slate-100 px-1">reyesrebollar.com</code></li>
        </ul>
      </div>
    </div>
  );
}

function SectionOnboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">New Client Onboarding v4.0</h1>
      
      <ol className="list-decimal list-inside space-y-3 text-sm text-slate-700">
        <li>Fork/duplicate the Reyes Rebollar repo</li>
        <li>Edit <code className="bg-slate-100 px-1">site.config.ts</code> with client identity</li>
        <li>Swap brand assets into <code className="bg-slate-100 px-1">public/brand/</code></li>
        <li><span className="font-bold">Create company row:</span>
          <div className="bg-slate-900 text-slate-100 rounded p-2 font-mono text-xs mt-1">
            INSERT INTO companies (name, slug) VALUES (...) RETURNING id;
          </div>
        </li>
        <li><span className="font-bold">Set NEXT_PUBLIC_COMPANY_ID</span> in Cloudflare Pages</li>
        <li><span className="font-bold">Add manager to company_members:</span>
          <div className="bg-slate-900 text-slate-100 rounded p-2 font-mono text-xs mt-1">
            INSERT INTO company_members (...) VALUES (...);
          </div>
        </li>
        <li>Deploy to Cloudflare Pages</li>
        <li>Set custom domains (internal + public)</li>
      </ol>
    </div>
  );
}

function SectionValidation() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Validation Checklist</h1>
      
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <span>☐</span>
          <span className="text-sm">No hardcoded client names in <code className="bg-slate-100 px-1">app/</code>, <code className="bg-slate-100 px-1">components/</code>, <code className="bg-slate-100 px-1">lib/</code></span>
        </div>
        <div className="flex items-start gap-2">
          <span>☐</span>
          <span className="text-sm"><code className="bg-slate-100 px-1">NEXT_PUBLIC_COMPANY_ID</code> is set</span>
        </div>
        <div className="flex items-start gap-2">
          <span>☐</span>
          <span className="text-sm"><code className="bg-slate-100 px-1">npm run build</code> passes</span>
        </div>
        <div className="flex items-start gap-2">
          <span>☐</span>
          <span className="text-sm">Manager login works → company_members check passes</span>
        </div>
        <div className="flex items-start gap-2">
          <span>☐</span>
          <span className="text-sm">Data isolation verified → no cross-company leakage</span>
        </div>
      </div>
    </div>
  );
}

function SectionPhase2() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Phase 2 Roadmap</h1>
      
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <p className="font-bold">tenant_users table</p>
          <p className="text-sm text-slate-600">Link portal tenants to auth.users (magic-link auth)</p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <p className="font-bold">Admin dashboard</p>
          <p className="text-sm text-slate-600">propframe.drkm.io — manage all companies from one place</p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <p className="font-bold">Full SaaS routing</p>
          <p className="text-sm text-slate-600">[slug].propframe.drkm.io → shared app with dynamic config</p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <p className="font-bold">Stripe billing</p>
          <p className="text-sm text-slate-600">Per-company usage tracking and invoicing</p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <p className="font-bold">Edge Function updates</p>
          <p className="text-sm text-slate-600">Make send-notice-email and send-portal-invite company-aware</p>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
        <p className="font-bold text-purple-900">Vision</p>
        <p className="text-sm text-purple-900 mt-2">
          A complete SaaS platform where any real estate professional can sign up, branded template deployed automatically, and start managing properties immediately.
        </p>
      </div>
    </div>
  );
}
