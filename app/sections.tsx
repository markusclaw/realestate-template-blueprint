export function SectionValidation() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-2xl font-bold mb-6">Validation Checklist</h1>
      
      <h2 className="text-xl font-bold mt-8 mb-4">Functional Checks</h2>
      <ul className="space-y-2">
        <li>☐ Homepage renders correctly with correct company name</li>
        <li>☐ Header shows correct logo (<code>/brand/logo.png</code>)</li>
        <li>☐ Header shows correct company name and subtitle</li>
        <li>☐ Hero image loads from <code>siteConfig.heroImagePath</code></li>
        <li>☐ Hero copy and pillars render from config</li>
        <li>☐ Location tagline renders from config</li>
        <li>☐ Footer shows correct company name, city, and email</li>
        <li>☐ Footer email <code>mailto:</code> link is correct</li>
        <li>☐ Copyright year updates dynamically</li>
        <li>☐ <code>&lt;title&gt;</code> tag matches <code>siteConfig.metaTitle</code></li>
        <li>☐ Meta description matches <code>siteConfig.metaDescription</code></li>
        <li>☐ Theme colors render correctly across all pages</li>
        <li>☐ Radix accent and gray values come from config</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">Portal and Supabase Checks</h2>
      <ul className="space-y-2">
        <li>☐ Tenant portal login works</li>
        <li>☐ Manager portal login works</li>
        <li>☐ Maintenance requests submit correctly</li>
        <li>☐ Maintenance requests appear in manager dashboard</li>
        <li>☐ Supabase URL points to correct project</li>
        <li>☐ Norma deployment does not surface Reyes Rebollar tenant data</li>
        <li>☐ Reyes deployment does not surface Norma data</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">Config Hygiene Checks</h2>
      <p>Search for hardcoded client identity strings:</p>
      <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm space-y-3">
        <div>
          <div className="text-slate-600 mb-1">grep -R "Reyes Rebollar" app components</div>
          <div className="text-slate-700">Expected: no results</div>
        </div>
        <div>
          <div className="text-slate-600 mb-1">grep -R "reyes@reyesrebollar.com" app components</div>
          <div className="text-slate-700">Expected: no results</div>
        </div>
        <div>
          <div className="text-slate-600 mb-1">npm run lint && npm run build</div>
          <div className="text-slate-700">Expected: zero errors</div>
        </div>
      </div>
    </div>
  );
}

export function SectionDone() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-2xl font-bold mb-6">Definition of Done</h1>
      
      <p>The refactor is complete when all of the following are true:</p>
      
      <ol className="space-y-3 list-decimal list-inside">
        <li>A developer can onboard a new real estate client by editing only <code>site.config.ts</code>, <code>public/brand/</code>, and <code>.env.local</code> — no component files touched.</li>
        <li>The Reyes Rebollar site is visually and functionally identical to pre-refactor.</li>
        <li>Norma Martinez's deployment runs from the same codebase with her own config, assets, and Supabase project.</li>
        <li>Both deployments pass the full validation checklist.</li>
        <li>All client data is isolated by Supabase project.</li>
        <li><code>npm run build</code> passes with zero errors on both deployments.</li>
        <li>The grep checks confirm hardcoded client identity values exist only in <code>site.config.ts</code>.</li>
      </ol>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
        <p className="font-bold text-green-900 mb-2">✓ Success Criteria</p>
        <p className="text-green-900">
          When a new client can be onboarded in 15 minutes by changing three things, the template is production-ready.
        </p>
      </div>
    </div>
  );
}

export function SectionNotes() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-2xl font-bold mb-6">Strategic Notes</h1>
      
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <p className="font-bold text-blue-900">Complete the refactor on Reyes Rebollar before touching Norma's repo</p>
          <p className="text-blue-900 text-sm">
            Duplicating while values are still hardcoded doubles the cleanup work.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <p className="font-bold text-purple-900">ThemeInjector is the key unlock</p>
          <p className="text-purple-900 text-sm">
            It's what allows Norma to have a completely different visual identity without editing a single stylesheet.
          </p>
        </div>

        <div className="border-l-4 border-amber-500 pl-4">
          <p className="font-bold text-amber-900">app/page.tsx is the most content-heavy file</p>
          <p className="text-amber-900 text-sm">
            It contains the full family origin story and values — all of it must move to config to make the template truly client-agnostic.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <p className="font-bold text-green-900">Supabase is already clean</p>
          <p className="text-green-900 text-sm">
            No database refactor needed — just separate projects and separate .env.local files per client.
          </p>
        </div>

        <div className="border-l-4 border-orange-500 pl-4">
          <p className="font-bold text-orange-900">Separate repos first, monorepo later</p>
          <p className="text-orange-900 text-sm">
            At 2 clients the overhead of a monorepo isn't worth it. Revisit at 4+.
          </p>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-6 mt-8">
        <p className="text-sm text-slate-600">
          <strong>Version 2.0 — April 2026</strong><br/>
          Stack: Next.js 15 App Router · Tailwind CSS · Radix UI Themes · Supabase
        </p>
      </div>
    </div>
  );
}
