import react from "react"


export const products = [
  /*   {
        id: 1,
        name: "Bruce",
        lastname: "Wayne",
        nickname: "Batman",
        city: "Ciudad Gótica",
        profesion: "Súper Héroe",
        image: '/assets/Batman.png',
        price: 6,
        description: "¡Crash! ¡Broom! ¡Miau! Siempre que Gatúbela está a punto de completar su último plan perfecto, Batman contesta a la llamada de la justicia, llega rápidamente en su batimóvil Mighty Micros personalizado y persigue a la felina criminal por los laberínticos callejones de Ciudad Gótica. No se rendirá hasta que la atrape y recupere el valioso tesoro que ha robado, pero a Gatúbela le gusta demostrar que es más rápida e inteligente que el Caballero de la Noche… ¡a menos que él la distraiga con un sabroso plato de leche!",
        category: "dc",
        logo: '/assets/LogoDc.webp',
        typeProduct: "Personaje",
        stock: 20
    },

    {
        id: 2,
        name: "Peter",
        lastname: "Parker",
        nickname: "Spiderman",
        city: "New York",
        profesion: "Súper Héroe",
        image: '/assets/Spiderman.png',
        price: 8,
        description: "Spider-Man, el amigable vecino, tendrá que sacarles provecho a su ingenio, su fuerza y su sentido arácnido para ayudar a los demás héroes a impedir que Thanos cumpla su plan maestro y reúna todas las Gemas del Infinito.",
        category: "marvel",
        logo: '/assets/Logomarvel.png',
        typeProduct: "Personaje",
        stock: 15
    },
 
    {
        id: 3,
        name: "Carol",
        lastname: "Danvers",
        nickname: "Capitana Marvel",
        city: "planeta Hala",
        profesion: "Súper Heroína",
        image: '/assets/Capitana.png',
        price: 7,
        description: "Figura de super Héroe",
        category: "marvel",
        logo: '/assets/Logomarvel.png',
        typeProduct: "Personaje",
        stock: 25
    },

    {
        id: 4,
        name: "Tony",
        lastname: "Stark",
        nickname: "Iron Man",
        city: "New York",
        profesion: "Súper Héroe",
        image: '/assets/Ironman.png',
        price: 10,
        description: "Considerado parte imprescindible de los Vengadores desde el principio, Tony Stark acaba separándose de los héroes más poderosos de la Tierra. Sin embargo, ante una amenaza más destructiva e inminente que cualquier otra a la que se haya enfrentado antes, Stark se verá obligado a pedir ayuda a algunas caras conocidas y luchar haciendo equipo con nuevos aliados.",
        category: "marvel",
        logo: '/assets/Logomarvel.png',
        typeProduct: "Figura",
        stock: 58
    },

    {
        id: 5,
        name: "Diana",
        lastname: "Prince",
        nickname: "Wonder Woman",
        city: "Washington, D.C.",
        profesion: "Súper Heroína",
        image: '/assets/Wonderwoman.png',
        price: 6,
        description: "Wonder Woman™ es la hija de Hipólita, la reina de las guerreras amazonas inmortales, y Zeus, el poderoso dios del Olimpo. Creció siendo Diana, aislada en la paradisíaca isla de Temiscira, hasta que el piloto Steve Trevor se estrelló allí y le mostró el mundo exterior. No tardaría en viajar a ese mundo, donde se convirtió en defensora de la justicia y la igualdad como Wonder Woman. La Princesa Amazona tiene fuerza divina, supervelocidad y capacidad para volar. ¡También es una hábil guerrera, cuenta con brazaletes antibalas y está armada con un Lazo de la Verdad que usa para detener a los criminales y obligarlos a decir la verdad!",
        category: "marvel",
        logo: '/assets/Logomarvel.png',
        typeProduct: "Figura",
        stock: 17
    },

    {
        id: 6,
        name: "Clark",
        lastname: "Kent",
        nickname: "Superman",
        city: "Metrópolis",
        profesion: "Súper Héroe",
        image: '/assets/Superman.png',
        price: 6,
        description: "Enviado a la Tierra desde el planeta condenado de Krypton™ cuando era un bebé, Kal-El™ fue adoptado por la cariñosa familia Kent y criado en el corazón de los Estados Unidos como Clark Kent. Al crecer, la radiación del Sol amarillo de la Tierra le dio a Clark poderes extraordinarios que mantuvo ocultos. Totalmente convertido en un adulto, hoy usa sus habilidades para proteger su mundo adoptivo como Superman™. El Hombre de Acero es casi invulnerable y cuenta con superfuerza, supervelocidad, superaliento y capacidad para volar. También cuenta con sentidos mejorados, como visión térmica, visión de rayos X y superaudición. ¡Uno de los superhéroes más grandes del mundo, Superman defiende a la humanidad contra todo tipo de amenazas, al tiempo que honra la verdad, la justicia y la esperanza!",
        category: "dc",
        logo: '/assets/LogoDc.webp',
        typeProduct: "Figura",
        stock: 23
    },

*/
    {
        id: 7,
        name: "Lois",
        lastname: "Lane",
        nickname: "Luisa Lane",
        city: "Metropolis",
        profesion: "Periodista",
        image: '/assets/Luisalane.png',
        price: 4,
        description: "Lois Lane, la premiada y temeraria periodista del Daily Planet, siempre está dispuesta a jugarse la vida por conseguir una historia. Lo que nadie sabe, sin embargo, es que guarda para sí misma la historia de su vida: ¡la identidad secreta de Superman! Al igual que Superman lucha por proteger la vida y la libertad de las personas, Lois lucha por hacer del mundo un lugar más seguro a través de sus investigaciones y artículos.",
        category: "dc",
        logo: '/assets/LogoDc.webp',
        typeProduct: "Figura",
        stock: 8
    },

    {
        id: 8,
        name: "Arthur",
        lastname: "Fleck",
        nickname: "El Guasón",
        city: "Ciudad Gótica",
        profesion: "Villano",
        image: '/assets/Guason.png',
        price: 9,
        description: "No hay nada divertido en el archienemigo de Batman, el Guasón. Cuando no era más que un ladrón de poca monta, el Guasón cayó a un tanque de residuos químicos que tornaron su piel blanca, su pelo verde y sus labios rojos; ¡justo como un payaso! Sus crímenes siempre incluyen malvadas bromas y chistes que sólo resultan divertidos para el Guasón. ¡Puede que no parezca más que un payaso, pero este villano no trae más que malas noticias para Batman y Ciudad Gótica!",
        category: "dc",
        logo: '/assets/LogoDc.webp',
        typeProduct: "Figura",
        stock: 3
    },

    {
        id: 9,
        name: "Arthur",
        lastname: "Curry",
        nickname: "Aquaman™",
        city: "Atlántida",
        profesion: "Súper Héroe",
        image: '/assets/Aquaman.png',
        price: 5,
        description: "Mitad humano y mitad atlante, Aquaman™ no es un superhéroe cualquiera. Su fisiología atlante le permite respirar bajo el agua y nadar a velocidades increíbles, además de darle superfuerza. Como Rey de la Atlántida, su linaje real también le permite comunicarse con la fauna marina. Blandiendo un todopoderoso tridente y montado sobre un gran tiburón blanco, Aquaman está decidido a restaurar el equilibrio en el mundo que tanto ama. Miembro fundador de la Liga de la Justicia, pelea con frecuencia junto a su esposa Mera™ contra supervillanos como los genios del mal Black Manta™ y Amo del Océano.",
        category: "dc",
        logo: '/assets/LogoDc.webp',
        typeProduct: "PersonaFiguraje",
        stock: 87
    },

    {
        id: 10,
        name: "Selina",
        lastname: "Kyle",
        nickname: "Gatúbela",
        city: "Ciudad Gótica",
        profesion: "Villana",
        image: '/assets/Gatubela.png',
        price: 4,
        description: "Catwoman es el alias de Selina Kyle, una ladrona de guante blanco moralmente reformada, con una relación romántica de idas y venidas con Batman. Se muestra como una mujer tenaz, independiente, y muy conflictiva con su pasado.",
        category: "dc",
        logo: '/assets/LogoDc.webp',
        typeProduct: "Figura",
        stock: 9
    },

    {
        id: 11,
        name: "Barry",
        lastname: "Allen",
        nickname: "Flash",
        city: "Central City",
        profesion: "Súper Héroe",
        image: '/assets/Flash.png',
        price: 7,
        description: "Nada es más rápido que Flash en su veloz deportivo Mighty Micros, especialmente cuando tiene su superbebida energética favorita. Pero cuando eres un sereno y experto supervillano como el Capitán Frío, no necesitas ser más rápido que el hombre más rápido del mundo para ganar. Sólo tienes que disparar a la carretera con tu pistola de hielo y dejar que el indefenso héroe resbale hasta detenerse. Máxima velocidad frente a máximo poder congelador: ¿quién cruzará antes la línea de meta?",
        category: "dc",
        logo: '/assets/LogoDc.webp',
        typeProduct: "Figura",
        stock: 15
    },

    {
        id: 12,
        name: "Emperatriz",
        lastname: "Del mal",
        nickname: "Malefica",
        city: "Páramo",
        profesion: "Villana",
        image: '/assets/Malefica.png',
        price: 10,
        description: "Maléfica, una oscura hechicera y maestra del mal, lanza un terrible maleficio sobre la recién nacida princesa Aurora, condenándola a perforarse el dedo con el huso de una rueca y caer en un eterno sueño antes de la puesta de sol de su dieciseisavo cumpleaños. Maléfica está dispuesta a cualquier cosa por conseguir su venganza, ¡incluso a transformarse en un gigantesco dragón!",
        category: "disney",
        logo: '/assets/LogoDisney.png',
        typeProduct: "Figura",
        stock: 26
    },

    {
        id: 13,
        name: "Flora",
        lastname: "Madrina",
        nickname: "Hada Madrina",
        city: "Alemania",
        profesion: "Hada Madrina",
        image: '/assets/Hada.png',
        price: 3,
        description: "¡Las hadas madrinas suelen aparecer justo cuando más las necesitas! La de cenicienta decidió ayudarla a hacer realidad su sueño y escapar de su malvada madrastra y sus perversas hermanastras.",
        category: "disney",
        logo: '/assets/LogoDisney.png',
        typeProduct: "Figura",
        stock: 6
    },

    {
        id: 14,
        name: "Maui",
        lastname: "Moana",
        nickname: "Maui",
        city: "Isla en el Pacífico", 
        profesion: "Semidios",
        image: '/assets/Maui.png',
        price: 6,
        description: "¡Maui es el semidiós más asombroso de todo el Pacífico! Carismático y gracioso, puede adoptar la forma de diferentes animales con su anzuelo mágico. Mitad dios, mitad mortal y totalmente asombroso, finalmente se convierte en un mentor y un fiel amigo para Moana.",
        category: "disney",
        logo: '/assets/LogoDisney.png',
        typeProduct: "Figura",
        stock: 13
    },

    {
        id: 15,
        name: "El Principe",
        lastname: "Azul",
        nickname: "Principe Azul",
        city: "Cuentos Encantados",
        profesion: "Príncipe",
        image: '/assets/Principe.png',
        price: 6,
        description: "El príncipe Azul, un apuesto miembro de la familia real que habita en el castillo de la colina, bailó con Cenicienta en el baile. Cuando ella se fue corriendo, dejando atrás su zapatilla, se propuso volver a encontrarla.",
        category: "disney",
        logo: '/assets/LogoDisney.png',
        typeProduct: "Figura",
        stock: 11
    },

    {
        id: 16,
        name: "Scott",
        lastname: "Lang",
        nickname: "Ant-Man",
        city: "Reino Cuántico",
        profesion: "Súper Héroe",
        image: '/assets/AntMan.png',
        price: 10,
        description: "Luego de los acontecimientos de Capitán América: Civil War, la exitosa película de Marvel, Scott se esfuerza por conciliar la vida de un superhéroe con sus responsabilidades como padre. Durante los últimos días de su arresto domiciliario forzoso en Sokovia, Scott promete a su familia que permanecerá en el buen camino cuando sea liberado (esta vez, de verdad). Pero, a pocas horas de la libertad, Hope acude a Scott con una nueva misión urgente. Incapaz de abandonar a Hank y a Hope en momentos de necesidad, Scott decide ponerse su traje, enderezar las cosas y volver a casa antes de que su oficial de libertad condicional revise su caso.",
        category: "marvel",
        logo: '/assets/Logomarvel.png',
        typeProduct: "Figura",
        stock: 8
    },
    {
        id: 17,
        name: "Sebastian",
        lastname: "Cangrejo",
        nickname: "Cangrejo Sebastian",
        city: "Atlántica",
        profesion: "Cangrejo",
        image: '/assets/Sebastian.png',
        price: 4,
        description: "Sebastián ama la música y las preocupaciones, y siempre ha protegido a Ariel. Pasa mucho tiempo enfrentando la terquedad de Ariel, pero también tiene mucho amor para ella.",
        category: "disney",
        logo: '/assets/LogoDisney.png',
        typeProduct: "Figura",
        stock: 5
    },
    {
        id: 18,
        name: "Elsa",
        lastname: "Princesa",
        nickname: "Frozen",
        city: "Arendalle",
        profesion: "Reina de Arendalle",
        image: '/assets/Elsa.png',
        price: 9,
        description: "Gracias a su poder mágico, Elsa puede crear cosas asombrosas hechas de hielo y nieve. ¡Lo que más le gusta es preparar un día perfecto para su hermana y sus amigas!.",
        category: "disney",
        logo: '/assets/LogoDisney.png',
        typeProduct: "Figura",
        stock: 18
    },

]
