import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <main className="max-w-xl rounded-2xl bg-white p-10 shadow-lg text-center">
        <Image
          src="/svs-logo.png"
          alt="Svenska Spel"
          width={384}
          height={192}
          priority
          className="mx-auto mb-10 h-48 w-auto"
        />
        <h1 className="text-3xl font-bold text-gray-900">
          Välkommen till ditt kodtest! 
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          I det här projektet ska du bygga ett spel med React, TypeScript
          och Next.js.
        </p>
        <p className="mt-2 text-gray-500">
          Läs igenom{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-medium text-gray-800">
            README.md
          </code>{" "}
          för en fullständig beskrivning av uppgiften. 
          <br />
          Lycka till!
        </p>
      </main>
    </div>
  );
}
