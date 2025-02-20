"use client"

import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Page non trouvée</h2>
      <p>Désolé, la page demandée n'existe pas</p>
      <Link href="/">Retour à la page d'acceuil</Link>
    </div>
  )
}