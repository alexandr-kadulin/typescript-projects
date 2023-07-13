import { ITour, Tour } from '.';

export const Tours = ({
  tours,
  removeTour,
}: {
  tours: ITour[];
  removeTour: (id: string) => void;
}) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};
