import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const initialFields = [
  { id: "1", content: "First Name" },
  { id: "2", content: "Last Name" },
  { id: "3", content: "Email" },
  { id: "4", content: "Phone Number" },
];

function DynamicForm() {
  const [fields, setFields] = useState(initialFields);


  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedFields = Array.from(fields);
  
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="fields">
          {(provided) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {fields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                  {(provided) => (
                    <ResizableBox
                      width={300}
                      height={100}
                      resizeHandles={["e", "w", "s", "se"]}
                      minConstraints={[100, 50]}
                      maxConstraints={[500, 300]}
                      className="p-2"
                    >
                      <div
                        className="bg-red-300 p-4 shadow-md border border-gray-300"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="text-center">{field.content}</div>
                      </div>
                    </ResizableBox>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DynamicForm;
