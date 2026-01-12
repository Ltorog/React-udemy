const firstName = "Luis";
const lastName = "Toro";

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear']
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Chile'
}

export function MyAwesomeApp() {
    return (
      <div data-testid="div-app">
        <h1 data-testid="first-name-title">{firstName}</h1>
        <h3>{lastName}</h3>

        <p>{1 + 1}</p>
        <p className="mi-clase-favorita">{favoriteGames.join(', ')}</p>
        <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

        <p>
            { JSON.stringify(address) }
        </p>
      </div>  
    );
}