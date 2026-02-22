// ============================================================
// CATÁLOGO DE INSTRUMENTOS MÉDICOS (74 instrumentos)
// ============================================================
const instruments = [
    { id: 1, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0013.jpg', name: 'Lápiz Electroquirúrgico', category: 'Corte y disección', description: 'Instrumento eléctrico en forma de lápiz con electrodo activo en la punta. Se conecta a la unidad electroquirúrgica.', uso: 'Cortar tejido y coagular vasos sanguíneos mediante corriente eléctrica de alta frecuencia.' },
    { id: 2, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0014.jpg', name: 'Escalpelo Armónico', category: 'Corte y disección', description: 'Instrumento que utiliza ultrasonido para cortar y coagular simultáneamente. La hoja vibra a alta frecuencia.', uso: 'Cortar y coagular tejidos con mínimo daño térmico. Útil en cirugía laparoscópica.' },
    { id: 3, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0015.jpg', name: 'Pinzas de Halstead (Mosquito)', category: 'Pinzas hemostáticas', description: 'Pinza pequeña y delicada con estriado fino en toda la mordaza, curva o recta.', uso: 'Hemostasia de vasos muy pequeños y disección de tejidos delicados.' },
    { id: 4, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0016.jpg', name: 'Pinzas de Crile', category: 'Pinzas hemostáticas', description: 'Pinza con estriado transversal en toda la longitud de las mordazas, curva o recta.', uso: 'Hemostasia de vasos de calibre mediano.' },
    { id: 5, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0017.jpg', name: 'Pinzas de Kelly', category: 'Pinzas hemostáticas', description: 'Pinza curva o recta con estriado transversal en el 50% distal de las mordazas.', uso: 'Hemostasia de vasos medianos y pinzamiento de tejidos.' },
    { id: 6, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0018.jpg', name: 'Pinzas de Rochester-Péan', category: 'Pinzas hemostáticas', description: 'Pinza larga con mordaza recta totalmente estriada y cremallera.', uso: 'Control de hemorragias en vasos grandes o tejidos gruesos.' },
    { id: 7, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0019.jpg', name: 'Pinzas de Carmalt', category: 'Pinzas hemostáticas', description: 'Pinza grande con estriado longitudinal en las mordazas y estriado transversal en los extremos.', uso: 'Ocluir estructuras grandes como el pedículo ovárico o vasos de gran calibre.' },
    { id: 8, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0020.jpg', name: 'Pinzas de Mixter', category: 'Pinzas hemostáticas', description: 'Pinza angulada a 90° con punta fina y mordaza con estriado fino.', uso: 'Disección roma y ligadura de vasos en espacios profundos o ángulos difíciles.' },
    { id: 9, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0021.jpg', name: 'Pinzas Hemostáticas de Adson', category: 'Pinzas hemostáticas', description: 'Pinza hemostática pequeña y delicada de punta fina y curva.', uso: 'Hemostasia de vasos pequeños en cirugía plástica y reconstructiva.' },
    { id: 10, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0022.jpg', name: 'Tijeras de Mayo Rectas', category: 'Corte y disección', description: 'Tijeras rectas fuertes con hojas rectas. Otro nombre: Tijeras de sutura.', uso: 'Cortar suturas.' },
    { id: 11, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0023.jpg', name: 'Tijeras de Mayo Curvas', category: 'Corte y disección', description: 'Tijeras fuertes con hojas curvas y puntas romas o agudas.', uso: 'Separar o aislar tejidos fibrosos masivos.' },
    { id: 12, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0024.jpg', name: 'Tijeras de Metzenbaum', category: 'Corte y disección', description: 'Tijeras largas y delgadas con hojas curvas o rectas y puntas romas o agudas.', uso: 'Separar y aislar tejidos delicados.' },
    { id: 13, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0025.jpg', name: 'Tijeras para Vendajes de Lister', category: 'Corte y disección', description: 'Tijeras romas anguladas; hoja inferior con punta aplanada para deslizarse bajo apósitos.', uso: 'Cortar apósitos, campos y materiales sin dañar al paciente.' },
    { id: 14, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0026.jpg', name: 'Tijeras para Alambre', category: 'Corte y disección', description: 'Tijeras anguladas con estriado fino y muesca circular interna. Aros dorados.', uso: 'Cortar alambre de calibre pequeño y sutura metálica.' },
    { id: 15, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0027.jpg', name: 'Mango de Bisturí Nº 3', category: 'Corte y disección', description: 'Mango delgado y plano estriado. Recibe hojas #10, 11, 12 y 15.', uso: 'Sostener hojas de bisturí para realizar incisiones finas de precisión.' },
    { id: 16, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0028.jpg', name: 'Mango de Bisturí Nº 3 Largo', category: 'Corte y disección', description: 'Mango #3 de versión alargada. Recibe hojas #10, 11, 12 y 15.', uso: 'Cortes de precisión en heridas profundas.' },
    { id: 17, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0029.jpg', name: 'Mango de Bisturí Nº 7', category: 'Corte y disección', description: 'Mango largo y fino de sección redonda. Recibe hojas #10, 11, 12 y 15.', uso: 'Cortes de precisión en espacio limitado o herida profunda.' },
    { id: 18, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0030.jpg', name: 'Hoja de Bisturí Nº 10', category: 'Corte y disección', description: 'Hoja con cuchilla convexa grande. Se monta en el mango Nº 3.', uso: 'Incisiones amplias en piel y tejido blando.' },
    { id: 19, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0031.jpg', name: 'Hoja de Bisturí Nº 11', category: 'Corte y disección', description: 'Hoja triangular con punta muy aguda y filo en el borde inferior recto.', uso: 'Incisiones de punta o punción (abscesos, arteriotomías).' },
    { id: 20, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0032.jpg', name: 'Hoja de Bisturí Nº 12', category: 'Corte y disección', description: 'Hoja con forma de gancho con filo en el borde cóncavo.', uso: 'Incisiones en espacios pequeños o curvos.' },
    { id: 21, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0033.jpg', name: 'Hoja de Bisturí Nº 15', category: 'Corte y disección', description: 'Hoja pequeña con cuchilla convexa. Se monta en el mango Nº 3 o Nº 7.', uso: 'Incisiones pequeñas y precisas, disección de tejidos delicados.' },
    { id: 22, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0034.jpg', name: 'Mango de Bisturí Nº 4', category: 'Corte y disección', description: 'Mango más grande y resistente. Compatible con hojas Nº 20, 21, 22, 23.', uso: 'Sostener hojas de bisturí grandes para incisiones en tejidos gruesos.' },
    { id: 23, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0035.jpg', name: 'Hoja de Bisturí Nº 20', category: 'Corte y disección', description: 'Hoja grande con cuchilla convexa. Se monta en el mango Nº 4.', uso: 'Incisiones amplias en cirugías de abdomen y tórax.' },
    { id: 24, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0036.jpg', name: 'Mango de Bisturí de Beaver', category: 'Corte y disección', description: 'Mango cilíndrico pequeño con sistema de fijación de hoja especial.', uso: 'Microcirugía, cirugía ocular y procedimientos que requieren alta precisión.' },
    { id: 25, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0037.jpg', name: 'Pinzas de Disección de Adson Sin Dientes', category: 'Disección', description: 'Pinza sin dientes con estriado transversal en punta, mango delgado y ligero.', uso: 'Manejo atraumático de tejidos delicados durante la sutura.' },
    { id: 26, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0038.jpg', name: 'Pinzas de Disección de Adson Con Dientes', category: 'Disección', description: 'Pinza con dientes 1x2 en la punta, mango delgado y ligero.', uso: 'Sujeción de tejidos delicados de piel durante la sutura.' },
    { id: 27, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0039.jpg', name: 'Pinzas de Disección de Ferris-Smith', category: 'Disección', description: 'Pinza con múltiples dientes intercalados en la punta (4×5), mango más largo.', uso: 'Sujeción firme de tejidos durante la disección general.' },
    { id: 28, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0040.jpg', name: 'Pinzas de Disección de Cushing', category: 'Disección', description: 'Pinza con dientes finos 1×2 en la punta y mango largo y delgado.', uso: 'Sujeción delicada de tejidos en neurocirugía y cirugía vascular.' },
    { id: 29, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0041.jpg', name: 'Pinzas de Disección de DeBakey', category: 'Disección', description: 'Pinza sin diente con estriado longitudinal fino en la punta para menor traumatismo.', uso: 'Manejo atraumático de vasos sanguíneos y tejidos delicados.' },
    { id: 30, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0042.jpg', name: 'Portaagujas de Mayo-Hegar', category: 'Sutura', description: 'Portaagujas estándar con mandíbulas dentadas y cremallera robusta.', uso: 'Sostener agujas de sutura de tamaño mediano a grande.' },
    { id: 31, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0043.jpg', name: 'Portaagujas de Olsen-Hegar', category: 'Sutura', description: 'Portaagujas combinado con tijera integrada en las mandíbulas.', uso: 'Sostener agujas de sutura y cortar el hilo en el mismo instrumento.' },
    { id: 32, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0044.jpg', name: 'Portaagujas de Ryder', category: 'Sutura', description: 'Portaagujas de mandíbulas muy delgadas, sin diente, para suturas finas.', uso: 'Sutura de tejidos delicados y vascular con material muy fino.' },
    { id: 33, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0045.jpg', name: 'Portaagujas de Castroviejo', category: 'Sutura', description: 'Portaagujas de resorte (sin cremallera), mandíbulas muy finas, para microcirugía.', uso: 'Microcirugía ocular y vascular con suturas extremadamente finas.' },
    { id: 34, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0046.jpg', name: 'Pinzas de Disección Rusas', category: 'Disección', description: 'Pinza con dientes múltiples intercalados en forma de peine en ambas ramas.', uso: 'Sujeción de tejidos sin deslizamiento durante la disección.' },
    { id: 35, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0047.jpg', name: 'Pinzas para Campos de Backhaus', category: 'Sujeción y fijación', description: 'Pinza de campo con puntas afiladas y curvadas.', uso: 'Fijación de campos quirúrgicos al paciente.' },
    { id: 36, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0048.jpg', name: 'Pinzas para Campos No Penetrantes', category: 'Sujeción y fijación', description: 'Pinza de campo sin puntas penetrantes para fijar campos sin perforarlos.', uso: 'Fijación de campos quirúrgicos en zonas donde no se desea perforar.' },
    { id: 37, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0049.jpg', name: 'Pinzas Portaesponja de Foerster', category: 'Sujeción y fijación', description: 'Pinza con mordazas ovaladas fenestradas y estriado en el interior.', uso: 'Sujeción de gasas para preparación del campo quirúrgico y limpieza de heridas.' },
    { id: 38, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0050.jpg', name: 'Pinzas de Allis', category: 'Sujeción y fijación', description: 'Pinza con dientes finos intercalados en la punta de las mordazas.', uso: 'Sujeción de fascias, músculos y piel durante la cirugía.' },
    { id: 39, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0051.jpg', name: 'Pinzas de Babcock', category: 'Sujeción y fijación', description: 'Pinza sin diente con mordazas fenestradas en forma de triángulo atraumático.', uso: 'Sujeción atraumática de tejidos tubulares como intestino, trompas y vejiga.' },
    { id: 40, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0052.jpg', name: 'Pinzas Hemostáticas de Kocher Rectas', category: 'Pinzas hemostáticas', description: 'Pinza recta con dientes 1×2 en la punta y estriado transversal en toda la mordaza.', uso: 'Hemostasia de vasos grandes y sujeción de tejidos gruesos.' },
    { id: 41, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0053.jpg', name: 'Separador de Parker-Langenbeck', category: 'Retracción y exposición', description: 'Separador manual doble con fenestración ovalada en el mango. Un extremo más largo para mayor profundidad.', uso: 'Retracción de incisiones superficiales pequeñas.' },
    { id: 42, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0054.jpg', name: 'Separador de Goelet', category: 'Retracción y exposición', description: 'Separador manual doble con palas curvas en forma de taza y labio en luna creciente.', uso: 'Retracción de incisiones superficiales pequeñas.' },
    { id: 43, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0055.jpg', name: 'Separador de Senn', category: 'Retracción y exposición', description: 'Separador manual doble: un extremo con tres garras agudas o romas y el otro con pequeña pala lateral.', uso: 'Retracción de bordes de piel y tejidos más profundos en incisiones pequeñas.' },
    { id: 44, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0056.jpg', name: 'Separador de Murphy', category: 'Retracción y exposición', description: 'Tiene cuatro garras romas o agudas. Mango con abertura en forma de gota y punta a cada lado.', uso: 'Retracción superficial de los bordes de una herida.' },
    { id: 45, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0057.jpg', name: 'Separador de Volkmann', category: 'Retracción y exposición', description: 'Separador manual con 2 a 6 garras romas o agudas. Mango con abertura en forma de gota.', uso: 'Retracción superficial de los bordes de una herida.' },
    { id: 46, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0058.jpg', name: 'Espátula Maleable', category: 'Retracción y exposición', description: 'Separador manual plano y liso formado por una placa metálica con los extremos redondeados.', uso: 'Retracción de intestinos y otros órganos en una herida.' },
    { id: 47, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0059.jpg', name: 'Separador de Parker', category: 'Retracción y exposición', description: 'Separador manual doble con extremos redondeados lisos.', uso: 'Retracción y exposición de una herida pequeña o superficial.' },
    { id: 48, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0060.jpg', name: 'Erina (Gancho cutáneo)', category: 'Retracción y exposición', description: 'Pequeño instrumento manual con 1 o 2 ganchos agudos en los extremos.', uso: 'Retracción de los bordes cutáneos.' },
    { id: 49, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0061.jpg', name: 'Separador de Weitlaner', category: 'Retracción y exposición', description: 'Instrumento anillado de autorretención con cremallera; un extremo tiene 3 puntas y el otro 4.', uso: 'Mantiene abiertos los bordes de una herida.' },
    { id: 50, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0062.jpg', name: 'Separador de Gelpi', category: 'Retracción y exposición', description: 'Instrumento anillado de autorretención con cremallera y dos puntas agudas, una en cada lado.', uso: 'Exposición superficial a profunda de la herida, dependiendo de la profundidad.' },
    { id: 51, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0063.jpg', name: 'Cánula de Aspiración de Frazier', category: 'Aspiración', description: 'Sonda cilíndrica angulada con orificio de salida en el mango. Diámetro de 3 a 15 French.', uso: 'Aspirar en espacios limitados como cavidad nasal, intervenciones lumbares y craneotomías.' },
    { id: 52, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0064.jpg', name: 'Cánula de Aspiración de Poole', category: 'Aspiración', description: 'Puede ser desechable o reutilizable; tiene una vaina externa y un tubo interno.', uso: 'Aspirar grandes cantidades de sangre y otros líquidos de una cavidad corporal.' },
    { id: 53, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0065.jpg', name: 'Cánula de Aspiración de Yankauer', category: 'Aspiración', description: 'Tubo de plástico hueco con mango y cuerpo ligeramente flexionado que termina en punta ensanchada con abertura grande.', uso: 'Aspirar en todo tipo de heridas, de manera eficaz y sin dañar el tejido circundante.' },
    { id: 54, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0066.jpg', name: 'Portaagujas de Crile-Wood', category: 'Sutura y engrapado', description: 'Punta roma estrecha con patrón de estriado cruzado en las mandíbulas.', uso: 'Sostener agujas de tamaño pequeño a intermedio durante la sutura.' },
    { id: 55, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0067.jpg', name: 'Portaagujas de Mayo-Hegar', category: 'Sutura y engrapado', description: 'Mandíbulas anchas redondeadas en la punta, con patrón estriado cruzado.', uso: 'Sostener agujas grandes durante la sutura.' },
    { id: 56, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0068.jpg', name: 'Portaagujas de Ryder', category: 'Sutura y engrapado', description: 'Mandíbulas finas ahusadas con insertos de carburo.', uso: 'Sostener agujas de tamaño pequeño o intermedio. Se usa en intervenciones vasculares.' },
    { id: 57, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0069.jpg', name: 'Engrapadora de Piel', category: 'Sutura y engrapado', description: 'Instrumento estéril de un solo uso precargado con grapas rectangulares de acero inoxidable, con mango y gatillo.', uso: 'Aproximación de la piel en el cierre de heridas.' },
    { id: 58, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0071.jpg', name: 'Pinzas Aplicadoras de Clips', category: 'Sutura y engrapado', description: 'Puntas anguladas con estriado fino en las mandíbulas, que se deslizan sobre el clip para sujetarlo. Los clips son en cartuchos con código de color.', uso: 'Ocluir vasos u otras estructuras tubulares.' },
    { id: 59, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0072.jpg', name: 'Aplicador de Clips Precargado', category: 'Sutura y engrapado', description: 'Instrumento estéril de un solo uso, precargado con clips metálicos de diversos tamaños.', uso: 'Ocluir vasos u otras estructuras tubulares.' },
    { id: 60, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0073.jpg', name: 'Cucharilla para Cálculos Biliares de Fergusson', category: 'Accesorio', description: 'Instrumento en forma de cuchara doble con un extremo más largo que el otro. El juego incluye tamaños pequeño, intermedio y grande.', uso: 'Extracción de cálculos de la vesícula biliar.' },
    { id: 61, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0074.jpg', name: 'Pinzas Intestinales de Carter-Glassman', category: 'Pinzado y oclusión', description: 'Pueden ser rectas o curvas; tienen agarre grado cardíaco atraumático en las mandíbulas.', uso: 'Sostener el intestino durante una resección.' },
    { id: 62, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0075.jpg', name: 'Pinzas Intestinales de Doyen', category: 'Pinzado y oclusión', description: 'Pueden ser curvas o rectas; tienen estriado suave. Las mandíbulas se cubren con fundas de caucho o algodón para no causar traumatismo.', uso: 'Sostener el intestino durante una resección.' },
    { id: 63, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0076.jpg', name: 'Pinzas Géminis', category: 'Pinzado y oclusión', description: 'Pinzas anguladas a 90° con estriado horizontal a todo lo largo de las mandíbulas. También llamadas Pinzas de Mixter.', uso: 'Separar planos de tejido, pinzar vasos y colocar un nudo alrededor de estructuras tubulares.' },
    { id: 64, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0077.jpg', name: 'Pinzas de Lahey para Conductos Biliares', category: 'Pinzado y oclusión', description: 'Pinzas anguladas a 90° con estriado vertical a todo lo largo de las mandíbulas.', uso: 'Separar planos de tejido, pinzar vasos y colocar sutura alrededor de estructuras tubulares.' },
    { id: 65, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0078.jpg', name: 'Pinzas de Sarot', category: 'Pinzado y oclusión', description: 'Pinzas anilladas largas con mandíbulas estrechas largas y estriado horizontal a todo lo largo.', uso: 'Separar planos y pinzar vasos en la profundidad de la herida.' },
    { id: 66, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0079.jpg', name: 'Trocar para Vesícula Biliar', category: 'Corte y disección', description: 'Instrumento de dos piezas: vaina externa y obturador agudo. El obturador embona dentro de la vaina.', uso: 'Drenar la vesícula biliar durante una colecistectomía abierta.' },
    { id: 67, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0080.jpg', name: 'Pinzas de Pennington', category: 'Sujeción y fijación', description: 'Puntas triangulares con estriado horizontal.', uso: 'Tomar tejidos y órganos durante cirugía intestinal, rectal y cesárea.' },
    { id: 68, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0081.jpg', name: 'Pinzas para Cálculos Biliares de Desjardin', category: 'Sujeción y fijación', description: 'Instrumento curvo sin cremalleras; mandíbulas con puntas ovaladas fenestradas.', uso: 'Prender pólipos y cálculos en el conducto colédoco y la vesícula biliar.' },
    { id: 69, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0082.jpg', name: 'Sonda Acanalada y Estilete', category: 'Sondeo y dilatación', description: 'El estilete recuerda una aguja roma con ojo French. La sonda acanalada tiene mango en lengüeta y canal cóncavo que guía el estilete.', uso: 'Detectar una obstrucción en estructura tubular o determinar la trayectoria de una fístula.' },
    { id: 70, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0083.jpg', name: 'Dilatadores de Bakes de Conducto Colédoco', category: 'Sondeo y dilatación', description: 'Punta maciza de acero inoxidable ovalada unida a un tallo estrecho con mango liso. El tallo es maleable y puede doblarse.', uso: 'Abrir y expandir el conducto colédoco a fin de drenar la bilis del hígado.' },
    { id: 71, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0084.jpg', name: 'Separador de Richardson-Eastman', category: 'Retracción y exposición', description: 'Separador manual doble con curvatura lateral de las palas cóncavas con labios en forma de luna creciente.', uso: 'Retracción de los bordes de una herida. La pala menor para inicio de incisión, la mayor para mayor profundidad.' },
    { id: 72, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0085.jpg', name: 'Separador de Richardson', category: 'Retracción y exposición', description: 'Separador manual con mango hueco y curvatura lateral de la pala cóncava. Se expende en juegos de tres tamaños.', uso: 'Retracción de los bordes de una herida.' },
    { id: 73, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0086.jpg', name: 'Separador de Kelly', category: 'Retracción y exposición', description: 'Separador manual con mango hueco y curvatura lateral en ángulo recto. La pala está ligeramente deprimida con labio en luna creciente.', uso: 'Retracción de los bordes de una herida. A veces confundido con el separador de Richardson.' },
    { id: 74, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0087.jpg', name: 'Separador de Deaver', category: 'Retracción y exposición', description: 'Tira plana de acero inoxidable en forma de signo de interrogación. El ancho y la longitud varían según necesidades.', uso: 'Retracción profunda de órganos abdominales.' },
    { id: 75, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0088.jpg', name: 'Separador de Harrington', category: 'Retracción y exposición', description: 'Mango unido a una tira plana curva. El extremo de la hoja se expande en forma de corazón con reborde redondeado.', uso: 'Retracción profunda en herida abdominal; se usa para retraer hígado e intestino.' },
    { id: 76, image: 'FlashcardsInstrumentos/ImagenesFlashcard/instrumental_page-0089.jpg', name: 'Separador de Mayo', category: 'Retracción y exposición', description: 'La pala tiene una curva suave en forma de taza con labio en forma de luna creciente.', uso: 'Retracción de la pared abdominal.' }
];

// ============================================================
// ESTADO DE LA APP
// ============================================================
let quizDeck = [];
let quizIndex = 0;
let quizCorrect = 0;
let quizWrong = 0;
let quizAnswered = false;

let practiceDeck = [...instruments];
let practiceIndex = 0;

// ============================================================
// UTILIDADES
// ============================================================
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getOptions(correct, count = 4) {
    const others = instruments.filter(x => x.id !== correct.id).map(x => x.name);
    return shuffle([correct.name, ...shuffle(others).slice(0, count - 1)]);
}

// ============================================================
// REFERENCES
// ============================================================
const $ = id => document.getElementById(id);

// ============================================================
// MODE SWITCHING
// ============================================================
function switchMode(mode) {
    if (mode === 'quiz') {
        $('quiz-section').classList.add('active');
        $('practice-section').classList.remove('active');
        $('btn-quiz-mode').classList.add('active');
        $('btn-practice-mode').classList.remove('active');
        $('result-overlay').classList.add('hidden');
    } else {
        $('practice-section').classList.add('active');
        $('quiz-section').classList.remove('active');
        $('btn-practice-mode').classList.add('active');
        $('btn-quiz-mode').classList.remove('active');
        $('result-overlay').classList.add('hidden');
    }
}

// ============================================================
// QUIZ MODE
// ============================================================
function startQuiz() {
    quizDeck = shuffle([...instruments]);
    quizIndex = 0;
    quizCorrect = 0;
    quizWrong = 0;
    quizAnswered = false;
    $('result-overlay').classList.add('hidden');
    renderQuizCard();
}

function restartQuiz() {
    startQuiz();
    switchMode('quiz');
}

function renderQuizCard() {
    const instr = quizDeck[quizIndex];
    const total = quizDeck.length;

    // Stats
    $('progress-text').textContent = `${quizIndex + 1} / ${total}`;
    $('correct-count').textContent = quizCorrect;
    $('wrong-count').textContent = quizWrong;

    // Progress bar
    const pct = (quizIndex / total) * 100;
    $('progress-fill').style.width = `${pct}%`;

    // Image & category
    $('quiz-img').src = instr.image;
    $('quiz-img').alt = instr.name;
    $('quiz-category').textContent = instr.category;

    // Options
    const container = $('options-container');
    container.innerHTML = '';
    const opts = getOptions(instr);
    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => selectOption(btn, opt, instr);
        container.appendChild(btn);
    });

    // Hide info
    $('info-panel').classList.add('hidden');
    quizAnswered = false;
}

function selectOption(btn, selected, instr) {
    if (quizAnswered) return;
    quizAnswered = true;

    const isCorrect = selected === instr.name;
    if (isCorrect) quizCorrect++; else quizWrong++;

    // Highlight options
    $('options-container').querySelectorAll('.option-btn').forEach(b => {
        b.disabled = true;
        if (b.textContent === instr.name) b.classList.add('correct-answer');
        else if (b === btn && !isCorrect) b.classList.add('wrong-answer');
    });

    // Show info
    $('info-name').textContent = instr.name;
    $('info-categoria').textContent = instr.category;
    $('info-descripcion').textContent = instr.description;
    $('info-usos').textContent = instr.uso;
    // Hide optional rows
    $('info-otros').style.display = 'none';
    $('info-mas-row').style.display = 'none';

    $('info-panel').classList.remove('hidden');

    // Update stats
    $('correct-count').textContent = quizCorrect;
    $('wrong-count').textContent = quizWrong;
}

function nextCard() {
    quizIndex++;
    if (quizIndex >= quizDeck.length) {
        showResults();
    } else {
        renderQuizCard();
    }
}

// ============================================================
// PRACTICE MODE
// ============================================================
function renderPracticeCard() {
    const instr = practiceDeck[practiceIndex];
    $('practice-img').src = instr.image;
    $('practice-img').alt = instr.name;
    $('practice-category').textContent = instr.category;
    $('practice-counter').textContent = `${practiceIndex + 1} / ${practiceDeck.length}`;
    $('practice-info-panel').classList.add('hidden');
    $('btn-reveal').textContent = '👁 Mostrar información';
}

function togglePracticeInfo() {
    const instr = practiceDeck[practiceIndex];
    const panel = $('practice-info-panel');
    if (panel.classList.contains('hidden')) {
        $('practice-info-name').textContent = instr.name;
        $('pr-categoria').textContent = instr.category;
        $('pr-descripcion').textContent = instr.description;
        $('pr-usos').textContent = instr.uso;
        $('pr-otros-row').style.display = 'none';
        $('pr-mas-row').style.display = 'none';
        panel.classList.remove('hidden');
        $('btn-reveal').textContent = '✓ Información revelada';
    } else {
        panel.classList.add('hidden');
        $('btn-reveal').textContent = '👁 Mostrar información';
    }
}

function practiceNav(dir) {
    const newIdx = practiceIndex + dir;
    if (newIdx >= 0 && newIdx < practiceDeck.length) {
        practiceIndex = newIdx;
        renderPracticeCard();
    }
}

// ============================================================
// RESULTS
// ============================================================
function showResults() {
    const total = quizDeck.length;
    const pct = Math.round((quizCorrect / total) * 100);
    const passed = pct >= 70;

    $('result-emoji').textContent = passed ? '🏆' : '📚';
    $('result-title').textContent = passed ? '¡Excelente trabajo!' : 'Sigue practicando';
    $('result-message').textContent = passed
        ? `Superaste el 70%. ¡Eres un experto en instrumental quirúrgico!`
        : `No llegaste al 70% aún. Revisa los instrumentos en modo práctica y vuelve a intentarlo.`;
    $('rs-correct').textContent = quizCorrect;
    $('rs-wrong').textContent = quizWrong;
    $('rs-percent').textContent = `${pct}%`;
    $('rs-percent').style.color = passed ? 'var(--green)' : 'var(--red)';

    $('result-overlay').classList.remove('hidden');
}

// ============================================================
// ARRANQUE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    startQuiz();
    renderPracticeCard();
});
