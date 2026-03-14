import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: `Datenschutzerklärung - ${seoConfig.siteName}`,
  description: `Datenschutzerklärung für ${seoConfig.siteName}. Erfahren Sie, wie wir Ihre persönlichen Daten sammeln, nutzen und schützen.`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Language Switcher */}
      <Header locale="de" siteName={seoConfig.siteName} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Content */}
        <article className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
          <h1>Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2>1. Informationen, die wir sammeln</h2>
            <p>Wir sammeln Informationen, um unsere Dienste bereitzustellen, zu warten und zu verbessern. Dazu gehört:</p>
            <ul>
              <li>Geräteinformationen (Browser-Typ, Betriebssystem, Geräte-IDs)</li>
              <li>Nutzungsdaten (besuchte Seiten, genutzte Funktionen, verbrachte Zeit)</li>
              <li>Cookies und ähnliche Tracking-Technologien</li>
              <li>IP-Adresse und Standortdaten</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>2. Wie wir Ihre Informationen verwenden</h2>
            <p>Wir verwenden die gesammelten Informationen für verschiedene Zwecke:</p>
            <ul>
              <li><strong>Um unsere Dienste bereitzustellen:</strong> Website-Funktionalität und Benutzererlebnis sicherstellen</li>
              <li><strong>Um unsere Dienste zu verbessern:</strong> Nutzungsmuster analysieren, Fehler beheben und neue Funktionen entwickeln</li>
              <li><strong>Um mit Ihnen zu kommunizieren:</strong> Updates senden, auf Anfragen antworten und Kundensupport bieten</li>
              <li><strong>Um Werbung anzuzeigen:</strong> Relevante Werbung über Google AdSense anzeigen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>3. Weitergabe von Informationen</h2>
            <p>Wir verkaufen, tauschen oder vermieten Ihre persönlichen Identifikationsinformationen nicht an Dritte. Wir können Ihre Informationen in folgenden Umständen weitergeben:</p>
            <ul>
              <li><strong>Mit Dienstleistern:</strong> Dritte Parteien, die uns beim Betrieb unserer Website helfen (z.B. Google AdSense, Analytics-Anbieter)</li>
              <li><strong>Für rechtliche Zwecke:</strong> Wenn gesetzlich oder durch einen rechtlichen Prozess erforderlich</li>
              <li><strong>Um unsere Rechte zu schützen:</strong> Um Betrug zu verhindern, unsere Geschäftsbedingungen durchzusetzen oder unsere Benutzer zu schützen</li>
              <li><strong>Mit Ihrer Zustimmung:</strong> Wenn Sie ausdrücklich zustimmen, bestimmte Informationen weiterzugeben</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>4. Cookies und Tracking-Technologien</h2>
            <p>Wir verwenden Cookies und ähnliche Technologien, um Ihr Browsing-Erlebnis zu verbessern und personalisierte Inhalte bereitzustellen. Dies umfasst:</p>
            <ul>
              <li><strong>Essentielle Cookies:</strong> Erforderlich für grundlegende Website-Funktionalität</li>
              <li><strong>Performance-Cookies:</strong> Hilft uns zu verstehen, wie Sie unsere Website nutzen</li>
              <li><strong>Werbe-Cookies:</strong> Werden verwendet, um relevante Werbung über Google AdSense anzuzeigen</li>
              <li><strong>Funktionalitäts-Cookies:</strong> Erinnern an Ihre Einstellungen und Vorlieben</li>
            </ul>
            <p>Sie können Cookies über Ihre Browsereinstellungen steuern. Das Deaktivieren bestimmter Cookies kann jedoch die Website-Funktionalität beeinträchtigen.</p>
          </section>

          <section className="mb-8">
            <h2>5. Sicherheit Ihrer Daten</h2>
            <p>Wir implementieren geeignete technische und organisatorische Maßnahmen zum Schutz Ihrer persönlichen Informationen vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung. Dazu gehört:</p>
            <ul>
              <li>SSL/TLS-Verschlüsselung für Datenübertragung</li>
              <li>Sichere Hosting-Infrastruktur</li>
              <li>Regelmäßige Sicherheitsaudits und Updates</li>
              <li>Zugriffskontrollen und Authentifizierung</li>
              <li>Datensicherung und -wiederherstellungsverfahren</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>6. Ihre Rechte</h2>
            <p>Sie haben folgende Rechte in Bezug auf Ihre persönlichen Informationen:</p>
            <ul>
              <li><strong>Recht auf Zugriff:</strong> Eine Kopie Ihrer persönlichen Daten anfordern</li>
              <li><strong>Recht auf Berichtigung:</strong> Korrektur ungenauer Daten anfordern</li>
              <li><strong>Recht auf Löschung:</strong> Löschung Ihrer persönlichen Daten anfordern</li>
              <li><strong>Recht auf Widerspruch:</strong> Widerspruch gegen die Verarbeitung Ihrer persönlichen Daten einlegen</li>
              <li><strong>Recht auf Datenübertragbarkeit:</strong> Erhalt Ihrer Daten in einem strukturierten Format</li>
              <li><strong>Recht auf Widerruf der Zustimmung:</strong> Widerruf der Zustimmung jederzeit</li>
            </ul>
            <p className="mt-4">Um diese Rechte auszuüben, kontaktieren Sie uns bitte mit den untenstehenden Informationen.</p>
          </section>

          <section className="bg-blue-50 p-4 rounded-lg">
            <h3>DSGVO-Compliance</h3>
            <p>Wenn Sie sich in der Europäischen Union (EU) befinden, haben Sie zusätzliche Rechte gemäß der Datenschutz-Grundverordnung (DSGVO). Wir erfüllen DSGVO-Anforderungen, einschließlich:</p>
            <ul>
              <li>Klare und transparente Informationen über die Datenverarbeitung</li>
              <li>Rechtmaßige Grundlage für die Verarbeitung personenbezogener Daten</li>
              <li>Betroffenenrechte (Zugriff, Berichtigung, Löschung, etc.)</li>
              <li>Datenübertragbarkeit zwischen Diensten</li>
              <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>
          </section>
        </article>

        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} {seoConfig.siteName}. Alle Rechte vorbehalten.</p>
            <p className="text-gray-400 mt-2">Erstellt mit KI-generierten Inhalten</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
