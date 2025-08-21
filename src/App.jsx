import { useState, useEffect } from 'react';
import { CheckSquare, Square, Calendar, Clock, BookOpen, Code, Brain, Trophy, ExternalLink } from 'lucide-react';

const AILearningSchedule = () => {
  const [completedResources, setCompletedResources] = useState(() => {
    // Cargar progreso desde localStorage
    const saved = localStorage.getItem('ai-learning-progress');
    return saved ? JSON.parse(saved) : {};
  });
  
  // Guardar progreso en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('ai-learning-progress', JSON.stringify(completedResources));
  }, [completedResources]);
  
  const toggleResource = (weekId, taskId, resourceId) => {
    const key = `${weekId}-${taskId}-${resourceId}`;
    setCompletedResources(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const weeks = [
    {
      id: 1,
      title: "Fundamentos de IA y Python",
      hours: "10 hrs",
      color: "bg-blue-100 border-blue-300",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      tasks: [
        { 
          id: 1, 
          name: "Configurar entorno Python + Jupyter", 
          hours: "2h",
          resources: [
            { id: 1, name: "Tutorial completo Jupyter Notebook", url: "https://www.programaenpython.com/miscelanea/tutorial-de-jupyter-notebook/", type: "📚" },
            { id: 2, name: "Primeros pasos con Jupyter", url: "https://adictosaltrabajo.com/2018/01/18/primeros-pasos-con-jupyter-notebook/", type: "📚" },
            { id: 3, name: "Video: Instalación Python y Jupyter", url: "https://youtube.com/results?search_query=instalar+python+jupyter+notebook+español", type: "📺" }
          ]
        },
        { 
          id: 2, 
          name: "Fundamentos de NumPy y Pandas", 
          hours: "3h",
          resources: [
            { id: 1, name: "W3Schools NumPy Tutorial", url: "https://www.w3schools.com/python/numpy/", type: "📚" },
            { id: 2, name: "W3Schools Pandas Tutorial", url: "https://www.w3schools.com/python/pandas/", type: "📚" },
            { id: 3, name: "Video: NumPy desde cero", url: "https://youtube.com/results?search_query=numpy+tutorial+español+completo", type: "📺" },
            { id: 4, name: "Video: Pandas para principiantes", url: "https://youtube.com/results?search_query=pandas+python+tutorial+español", type: "📺" }
          ]
        },
        { 
          id: 3, 
          name: "Introducción a IA: conceptos clave", 
          hours: "2h",
          resources: [
            { id: 1, name: "DotCSV: ¿Qué es Machine Learning?", url: "https://youtube.com/results?search_query=DotCSV+que+es+machine+learning", type: "📺" },
            { id: 2, name: "AprendeMachineLearning.com", url: "https://www.aprendemachinelearning.com/", type: "📚" },
            { id: 3, name: "Video: Conceptos básicos de IA", url: "https://youtube.com/results?search_query=inteligencia+artificial+conceptos+básicos+español", type: "📺" }
          ]
        },
        { 
          id: 4, 
          name: "Matemáticas para IA: álgebra lineal básica", 
          hours: "3h",
          resources: [
            { id: 1, name: "3Blue1Brown: Álgebra Lineal", url: "https://youtube.com/results?search_query=3blue1brown+algebra+lineal+subtitulos+español", type: "📺" },
            { id: 2, name: "Khan Academy: Álgebra Lineal", url: "https://es.khanacademy.org/math/linear-algebra", type: "📚" },
            { id: 3, name: "Video: Matemáticas para ML", url: "https://youtube.com/results?search_query=matemáticas+machine+learning+español", type: "📺" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Machine Learning Básico",
      hours: "10 hrs",
      color: "bg-green-100 border-green-300",
      icon: <Brain className="w-5 h-5 text-green-600" />,
      tasks: [
        { 
          id: 1, 
          name: "Tipos de ML: supervisado, no supervisado", 
          hours: "2h",
          resources: [
            { id: 1, name: "DotCSV: Aprendizaje Supervisado", url: "https://youtube.com/results?search_query=DotCSV+aprendizaje+supervisado", type: "📺" },
            { id: 2, name: "DotCSV: Aprendizaje No Supervisado", url: "https://youtube.com/results?search_query=DotCSV+aprendizaje+no+supervisado", type: "📺" },
            { id: 3, name: "Video: Tipos de Machine Learning", url: "https://youtube.com/results?search_query=tipos+machine+learning+español+explicación", type: "📺" }
          ]
        },
        { 
          id: 2, 
          name: "Scikit-learn: primeros pasos", 
          hours: "4h",
          resources: [
            { id: 1, name: "Documentación Scikit-learn", url: "https://scikit-learn.org/", type: "📚" },
            { id: 2, name: "Video: Introducción Scikit-learn", url: "https://youtube.com/results?search_query=scikit+learn+tutorial+español+principiantes", type: "📺" },
            { id: 3, name: "Tutorial escrito Scikit-learn", url: "https://www.aprendemachinelearning.com/", type: "📚" }
          ]
        },
        { 
          id: 3, 
          name: "Regresión lineal - teoría y práctica", 
          hours: "4h",
          resources: [
            { id: 1, name: "DotCSV: Regresión Lineal", url: "https://youtube.com/results?search_query=DotCSV+regresión+lineal", type: "📺" },
            { id: 2, name: "Video: Regresión Lineal Python", url: "https://youtube.com/results?search_query=regresión+lineal+python+scikit+learn+español", type: "📺" },
            { id: 3, name: "Tutorial: Regresión con Python", url: "https://www.aprendemachinelearning.com/regresion-lineal-en-espanol-con-python/", type: "📚" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Algoritmos de Clasificación",
      hours: "10 hrs",
      color: "bg-purple-100 border-purple-300",
      icon: <Code className="w-5 h-5 text-purple-600" />,
      tasks: [
        { 
          id: 1, 
          name: "K-Nearest Neighbors (KNN)", 
          hours: "3h",
          resources: [
            { id: 1, name: "DotCSV: Algoritmo KNN", url: "https://youtube.com/results?search_query=DotCSV+KNN+k+nearest+neighbors", type: "📺" },
            { id: 2, name: "Video: KNN Python implementación", url: "https://youtube.com/results?search_query=KNN+python+scikit+learn+español", type: "📺" },
            { id: 3, name: "Tutorial: KNN paso a paso", url: "https://www.aprendemachinelearning.com/k-vecinos-mas-cercanos-k-nearest-neighbors/", type: "📚" }
          ]
        },
        { 
          id: 2, 
          name: "Árboles de decisión", 
          hours: "3h",
          resources: [
            { id: 1, name: "DotCSV: Árboles de Decisión", url: "https://youtube.com/results?search_query=DotCSV+árboles+decisión", type: "📺" },
            { id: 2, name: "Video: Decision Trees Python", url: "https://youtube.com/results?search_query=árboles+decisión+python+español", type: "📺" },
            { id: 3, name: "Tutorial: Árboles de Decisión", url: "https://www.aprendemachinelearning.com/", type: "📚" }
          ]
        },
        { 
          id: 3, 
          name: "Support Vector Machines (SVM)", 
          hours: "4h",
          resources: [
            { id: 1, name: "DotCSV: SVM explicado", url: "https://youtube.com/results?search_query=DotCSV+SVM+support+vector+machine", type: "📺" },
            { id: 2, name: "Video: SVM implementación Python", url: "https://youtube.com/results?search_query=SVM+python+scikit+learn+español", type: "📺" },
            { id: 3, name: "3Blue1Brown: SVM conceptos", url: "https://youtube.com/results?search_query=support+vector+machine+visual+explanation", type: "📺" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Proyecto: Clasificador de Imágenes",
      hours: "10 hrs",
      color: "bg-yellow-100 border-yellow-300",
      icon: <Trophy className="w-5 h-5 text-yellow-600" />,
      tasks: [
        { 
          id: 1, 
          name: "Preparar dataset de imágenes", 
          hours: "2h",
          resources: [
            { id: 1, name: "Video: Crear dataset imágenes", url: "https://youtube.com/results?search_query=crear+dataset+imágenes+python+español", type: "📺" },
            { id: 2, name: "Tutorial: Preprocesamiento imágenes", url: "https://youtube.com/results?search_query=preprocesamiento+imágenes+opencv+python", type: "📺" },
            { id: 3, name: "Kaggle: Datasets de imágenes", url: "https://www.kaggle.com/datasets", type: "📚" }
          ]
        },
        { 
          id: 2, 
          name: "Implementar clasificador con scikit-learn", 
          hours: "4h",
          resources: [
            { id: 1, name: "Video: Clasificador de imágenes", url: "https://youtube.com/results?search_query=clasificador+imágenes+scikit+learn+español", type: "📺" },
            { id: 2, name: "Tutorial: Image classification Python", url: "https://youtube.com/results?search_query=image+classification+python+tutorial+español", type: "📺" },
            { id: 3, name: "Documentación: Image processing", url: "https://scikit-learn.org/stable/auto_examples/classification/plot_digits_classification.html", type: "📚" }
          ]
        },
        { 
          id: 3, 
          name: "Evaluación y mejoras del modelo", 
          hours: "4h",
          resources: [
            { id: 1, name: "Video: Métricas de evaluación", url: "https://youtube.com/results?search_query=métricas+evaluación+machine+learning+español", type: "📺" },
            { id: 2, name: "DotCSV: Overfitting y Underfitting", url: "https://youtube.com/results?search_query=DotCSV+overfitting+underfitting", type: "📺" },
            { id: 3, name: "Tutorial: Mejorar modelos ML", url: "https://www.aprendemachinelearning.com/", type: "📚" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Preprocesamiento de Datos",
      hours: "10 hrs",
      color: "bg-red-100 border-red-300",
      icon: <BookOpen className="w-5 h-5 text-red-600" />,
      tasks: [
        { 
          id: 1, 
          name: "Limpieza de datos y valores faltantes", 
          hours: "3h",
          resources: [
            { id: 1, name: "Video: Limpieza de datos Python", url: "https://youtube.com/results?search_query=limpieza+datos+pandas+python+español", type: "📺" },
            { id: 2, name: "Tutorial: Valores faltantes", url: "https://youtube.com/results?search_query=valores+faltantes+pandas+español", type: "📺" },
            { id: 3, name: "Documentación: Data cleaning Pandas", url: "https://pandas.pydata.org/docs/user_guide/missing_data.html", type: "📚" }
          ]
        },
        { 
          id: 2, 
          name: "Feature scaling y normalización", 
          hours: "3h",
          resources: [
            { id: 1, name: "Video: Normalización de datos", url: "https://youtube.com/results?search_query=normalización+datos+machine+learning+español", type: "📺" },
            { id: 2, name: "DotCSV: Feature Scaling", url: "https://youtube.com/results?search_query=DotCSV+feature+scaling", type: "📺" },
            { id: 3, name: "Tutorial: StandardScaler Scikit-learn", url: "https://scikit-learn.org/stable/modules/preprocessing.html", type: "📚" }
          ]
        },
        { 
          id: 3, 
          name: "Feature selection y engineering", 
          hours: "4h",
          resources: [
            { id: 1, name: "Video: Feature Engineering", url: "https://youtube.com/results?search_query=feature+engineering+python+español", type: "📺" },
            { id: 2, name: "Tutorial: Feature Selection", url: "https://youtube.com/results?search_query=feature+selection+scikit+learn+español", type: "📺" },
            { id: 3, name: "Documentación: Feature selection", url: "https://scikit-learn.org/stable/modules/feature_selection.html", type: "📚" }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Redes Neuronales - Introducción",
      hours: "10 hrs",
      color: "bg-indigo-100 border-indigo-300",
      icon: <Brain className="w-5 h-5 text-indigo-600" />,
      tasks: [
        { 
          id: 1, 
          name: "Conceptos de redes neuronales", 
          hours: "3h",
          resources: [
            { id: 1, name: "3Blue1Brown: Redes Neuronales", url: "https://youtube.com/results?search_query=3blue1brown+neural+networks+subtitulos+español", type: "📺" },
            { id: 2, name: "DotCSV: ¿Qué son las Redes Neuronales?", url: "https://youtube.com/results?search_query=DotCSV+redes+neuronales+que+son", type: "📺" },
            { id: 3, name: "Video: Neurona artificial explicada", url: "https://youtube.com/results?search_query=neurona+artificial+perceptron+español", type: "📺" }
          ]
        },
        { 
          id: 2, 
          name: "Perceptrón y backpropagation", 
          hours: "4h",
          resources: [
            { id: 1, name: "3Blue1Brown: Backpropagation", url: "https://youtube.com/results?search_query=3blue1brown+backpropagation+subtitulos", type: "📺" },
            { id: 2, name: "DotCSV: Backpropagation explicado", url: "https://youtube.com/results?search_query=DotCSV+backpropagation", type: "📺" },
            { id: 3, name: "Video: Perceptrón desde cero", url: "https://youtube.com/results?search_query=perceptron+python+desde+cero+español", type: "📺" }
          ]
        },
        { 
          id: 3, 
          name: "TensorFlow/Keras básico", 
          hours: "3h",
          resources: [
            { id: 1, name: "Video: Introducción TensorFlow", url: "https://youtube.com/results?search_query=tensorflow+tutorial+español+principiantes", type: "📺" },
            { id: 2, name: "Video: Keras primeros pasos", url: "https://youtube.com/results?search_query=keras+tutorial+español+básico", type: "📺" },
            { id: 3, name: "Documentación: TensorFlow en español", url: "https://www.tensorflow.org/?hl=es", type: "📚" }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Deep Learning Fundamentals",
      hours: "10 hrs",
      color: "bg-pink-100 border-pink-300",
      icon: <Code className="w-5 h-5 text-pink-600" />,
      tasks: [
        { 
          id: 1, 
          name: "Arquitecturas de redes profundas", 
          hours: "4h",
          resources: [
            { id: 1, name: "DotCSV: Deep Learning explicado", url: "https://youtube.com/results?search_query=DotCSV+deep+learning+explicado", type: "📺" },
            { id: 2, name: "Video: Arquitecturas de redes", url: "https://youtube.com/results?search_query=arquitecturas+redes+neuronales+profundas+español", type: "📺" },
            { id: 3, name: "Tutorial: Deep Learning conceptos", url: "https://www.aprendemachinelearning.com/", type: "📚" }
          ]
        },
        { 
          id: 2, 
          name: "Funciones de activación y optimización", 
          hours: "3h",
          resources: [
            { id: 1, name: "Video: Funciones de activación", url: "https://youtube.com/results?search_query=funciones+activación+redes+neuronales+español", type: "📺" },
            { id: 2, name: "DotCSV: Optimizadores", url: "https://youtube.com/results?search_query=DotCSV+optimizadores+adam+sgd", type: "📺" },
            { id: 3, name: "Video: Gradient Descent", url: "https://youtube.com/results?search_query=gradient+descent+español+explicación", type: "📺" }
          ]
        },
        { 
          id: 3, 
          name: "Regularización y dropout", 
          hours: "3h",
          resources: [
            { id: 1, name: "Video: Regularización L1 L2", url: "https://youtube.com/results?search_query=regularización+L1+L2+redes+neuronales+español", type: "📺" },
            { id: 2, name: "DotCSV: Dropout explicado", url: "https://youtube.com/results?search_query=DotCSV+dropout+regularización", type: "📺" },
            { id: 3, name: "Video: Evitar Overfitting", url: "https://youtube.com/results?search_query=evitar+overfitting+deep+learning+español", type: "📺" }
          ]
        }
      ]
    }
  ];

  // Función para obtener el progreso de una tarea basado en recursos completados
  const getTaskProgress = (week, task) => {
    const completedCount = task.resources.filter(resource => 
      completedResources[`${week.id}-${task.id}-${resource.id}`]
    ).length;
    return Math.round((completedCount / task.resources.length) * 100);
  };

  // Función para verificar si una tarea está completada (todos los recursos marcados)
  const isTaskCompleted = (week, task) => {
    return task.resources.every(resource => 
      completedResources[`${week.id}-${task.id}-${resource.id}`]
    );
  };

  const getWeekProgress = (week) => {
    const totalResources = week.tasks.reduce((sum, task) => sum + task.resources.length, 0);
    const completedTotal = week.tasks.reduce((sum, task) => {
      return sum + task.resources.filter(resource => 
        completedResources[`${week.id}-${task.id}-${resource.id}`]
      ).length;
    }, 0);
    return Math.round((completedTotal / totalResources) * 100);
  };

  const totalProgress = () => {
    const totalResources = weeks.reduce((sum, week) => {
      return sum + week.tasks.reduce((taskSum, task) => taskSum + task.resources.length, 0);
    }, 0);
    const completedTotal = Object.values(completedResources).filter(Boolean).length;
    return Math.round((completedTotal / totalResources) * 100);
  };

  const resetProgress = () => {
    if (confirm('¿Estás seguro de que quieres resetear todo el progreso?')) {
      setCompletedResources({});
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <Brain className="w-8 h-8 text-blue-600" />
            IA en Programación - 12 Semanas
          </h1>
          <div className="text-right flex flex-col gap-2">
            <div>
              <div className="text-2xl font-bold text-blue-600">{totalProgress()}%</div>
              <div className="text-sm text-gray-600">Progreso Total</div>
            </div>
            <button 
              onClick={resetProgress}
              className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition-colors"
            >
              Resetear Progreso
            </button>
          </div>
        </div>
        
        <div className="bg-gray-200 rounded-full h-4 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-300"
            style={{ width: `${totalProgress()}%` }}
          ></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-green-600" />
            <span className="text-gray-700">10 hrs/semana</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">120 hrs totales</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="text-gray-700">4 Proyectos</span>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="grid gap-6">
        {weeks.map((week) => (
          <div key={week.id} className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${week.color}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {week.icon}
                <h2 className="text-xl font-semibold text-gray-800">
                  Semana {week.id}: {week.title}
                </h2>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-700">{getWeekProgress(week)}%</div>
                <div className="text-sm text-gray-600">{week.hours}</div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getWeekProgress(week)}%` }}
              ></div>
            </div>
            
            <div className="space-y-4">
              {week.tasks.map((task) => {
                const taskCompleted = isTaskCompleted(week, task);
                const taskProgress = getTaskProgress(week, task);
                
                return (
                  <div key={task.id} className={`p-4 rounded-lg border-2 transition-all ${
                    taskCompleted ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {taskCompleted ? 
                          <CheckSquare className="w-5 h-5 text-green-600" /> : 
                          <Square className="w-5 h-5 text-gray-400" />
                        }
                        <h3 className={`font-medium ${taskCompleted ? 'text-green-800 line-through' : 'text-gray-800'}`}>
                          {task.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-700">{taskProgress}%</div>
                        <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded">
                          {task.hours}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-200 rounded-full h-1 mb-3">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${taskProgress}%` }}
                      ></div>
                    </div>
                    
                    <div className="space-y-2">
                      {task.resources.map((resource) => {
                        const isCompleted = completedResources[`${week.id}-${task.id}-${resource.id}`];
                        return (
                          <div 
                            key={resource.id}
                            className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-all ${
                              isCompleted ? 'bg-green-100 text-green-800' : 'bg-white hover:bg-blue-50'
                            }`}
                            onClick={() => toggleResource(week.id, task.id, resource.id)}
                          >
                            {isCompleted ? 
                              <CheckSquare className="w-4 h-4 text-green-600 flex-shrink-0" /> : 
                              <Square className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            }
                            <span className="text-sm">{resource.type}</span>
                            <span className={`flex-1 text-sm ${isCompleted ? 'line-through' : ''}`}>
                              {resource.name}
                            </span>
                            <a 
                              href={resource.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Resources Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          Recursos Principales en Español
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">🎯 Canales YouTube Principales</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• <strong>@DotCSV</strong> - Carlos Santana (¡IMPRESCINDIBLE para IA!)</li>
              <li>• <strong>Código Facilito</strong> - Python y Data Science</li>
              <li>• <strong>AprendeMachineLearning.com</strong> - Teoría y práctica</li>
              <li>• <strong>3Blue1Brown</strong> - Matemáticas visuales (subtítulos)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">🔍 Búsquedas Específicas YouTube</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• "machine learning español DotCSV"</li>
              <li>• "numpy pandas tutorial español completo"</li>
              <li>• "scikit-learn python español principiantes"</li>
              <li>• "tensorflow keras tutorial español"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>🚀 ¡Tu viaje hacia la IA en programación comienza aquí!</p>
        <p className="mt-1">Progreso guardado automáticamente en tu navegador</p>
      </div>
    </div>
  );
};

export default AILearningSchedule;