
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FarewellMessageProps {
  fromName: string;
  toName: string;
}

const FarewellMessage: React.FC<FarewellMessageProps> = ({ fromName, toName }) => {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl mb-12 slide-up">
      <CardContent className="p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-4">
            Para {toName}
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-nostalgic-blue to-nostalgic-lavender mx-auto"></div>
        </div>
        
        <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed space-y-6">
          <p className="text-xl font-light italic text-center mb-8">
            "Algunas despedidas no son finales, sino el comienzo de algo nuevo..."
          </p>
          
          <p>
            Querido/a {toName},
          </p>
          
          <p>
            Escribir estas líneas no es fácil, porque cada palabra lleva consigo el peso de todos los momentos compartidos y la certeza de que algo especial está llegando a su fin. Pero también llevan la gratitud inmensa por haberte conocido y por todo lo que has significado en mi vida.
          </p>
          
          <p>
            Han sido momentos únicos, esos que se quedan grabados no solo en la memoria, sino en el alma. Cada conversación, cada risa compartida, cada momento de silencio cómplice ha construido algo hermoso que permanecerá conmigo para siempre.
          </p>
          
          <p>
            Aunque los caminos nos lleven por senderos diferentes, quiero que sepas que siempre tendrás un lugar especial en mi corazón. Las personas como tú dejan huellas imborrables, y la tuya estará siempre conmigo.
          </p>
          
          <p>
            Te deseo lo mejor en esta nueva etapa. Que encuentres la felicidad que mereces, que cumplas todos tus sueños y que nunca olvides lo especial que eres.
          </p>
          
          <p className="text-center italic">
            Gracias por todo, {toName}. <br />
            Hasta siempre,
          </p>
          
          <p className="text-center font-medium text-nostalgic-blue">
            {fromName}
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-nostalgic-blue/20 to-nostalgic-lavender/20 rounded-full">
            <span className="text-sm text-gray-600">Con cariño y los mejores deseos ♥</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FarewellMessage;
